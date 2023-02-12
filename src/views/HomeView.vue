<template>
  <div class="home">
    <section class="contactList">
      Contactos
      <InputSearch />
      <ContactList />
    </section>
    <section class="messages">
      <LogOut />
      <MessageList />
      <InputMessage />
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InputSearch from "@/components/InputSearch.vue";
import ContactList from "@/components/ContactList.vue";
import MessageList from "@/components/Messages/MessageList.vue";
import InputMessage from '@/components/InputMessage.vue';
import LogOut from '@/components/LogOut.vue';

export default defineComponent({
  name: "HomeView",
  components: {
    InputSearch,
    ContactList,
    MessageList,
    InputMessage,
    LogOut
  },
});
</script>

<style lang="css" scoped>
@import url("../assets/variables.css");

.home {
  background: var(--backgroundColor);
  width: 100%;
  height: 100%;

  color: var(--fontColor);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
}

.contactList {
  width: 35%;
  display: flex;
  flex-direction: column;
}

.messages {
  width: 65%;
  background: var(--backgroundColorMessages);
  height: 100%;
}
</style>
