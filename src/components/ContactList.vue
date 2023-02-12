<template>
  <div class="contacts">
    <ul class="contactList">
      <li :class="{
        active: loggedPhone === user.userUid
      }" v-for="user in aUsers" :key="user.userUid" @click="setUserUid(user)">
        <img :src="user.photo" :alt="`Avatar de ${user.name}`" :title="`Avatar de ${user.name}`" width="65"
          height="65" />
        <section class="info">
          <div class="name">{{ user.name }}</div>
          <div class="lastMessage">
            <span>
              {{ user.lastMessageText + ' ' }}
            </span>
            <span class="message-time">
              {{
  new Date((user.lastMessageDate?.seconds ?? new Date().getTime() / 1000) * 1000).toLocaleString('es-ES', {
    timeZone:
      'Europe/Madrid', hour: '2-digit', minute: '2-digit', day: 'numeric', month: 'short', weekday: 'short'
  })
              }}
            </span>
          </div>
        </section>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import IUser from '@/interfaces/Users';
import { db, firebase } from '@/firebase';
import IMessage from "@/interfaces/Message";

export default defineComponent({
  setup() {
    const aUsers = ref<IUser[]>([]);
    const cUsers = db.collection('users');
    const store = useStore();
    const loggedPhone = computed(() => store.state.userUid);

    const setUserUid = (user: IUser) => {
      store.commit('setUserUid', user.userUid);
      store.dispatch('getMessages');
    };

    onMounted(async () => {
      const querySnapshot: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData> = await cUsers.get();
      querySnapshot.forEach(async (data: firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>) => {

        const {
          photo, name, userUid, date
        } = data.data();

        const aMessages: IMessage[] = [];

        const cMessages = await db
          .collection("messages")
          .orderBy("date")
          .where("userUid", "==", userUid)
          .get();

        cMessages.forEach((data) => {
          const { date, type, text, userUid } = data.data();
          aMessages.push({
            date,
            type,
            text,
            userUid,
          });
        });

        const lastMessageDate = aMessages[aMessages.length - 1].date;
        const lastMessageText = aMessages[aMessages.length - 1].text;


        aUsers.value.push({
          photo,
          name,
          userUid,
          date,
          lastMessageDate,
          lastMessageText
        });
      });


    });

    return {
      aUsers,
      loggedPhone,
      setUserUid
    };
  },
});
</script>

<style lang="css" scoped>
@import url("../assets/variables.css");

.contacts {
  width: 100%;
}

.contactList {
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: 10px;
}

li {
  width: 95%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  margin-bottom: 10px;
  border-radius: 2px;
  cursor: pointer;
}

img {
  border-radius: 50%;
}

.info {
  padding: 10px;
  display: flex;
  width: calc(100% - 65px);
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.name {
  font-size: 16px;
}

.lastMessage {
  font-size: 14px;
}

.active {
  background: var(--fontColorActive);
}
</style>
