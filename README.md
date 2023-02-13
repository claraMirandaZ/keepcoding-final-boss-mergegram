<h1 align=center>Proyecto final bootcamp Mujeres en Tech (beca Glovo)</h1>

Llegó el momento. Nos hemos puesto manos a la obra para afrontar el proyecto final del bootcamp usando todos los conocimientos que hemos adquirido.

Como en la vida real, hemos tenido que investigar, tomar decisiones, estudiar y aprender cosas nuevas... igual que en la vida real. Creemos que hemos conseguido lo fundamental: aprender, consolidar conocimientos y disfrutar del proceso, viviéndolo como si fuera un proyecto real solicitado por un cliente, con un plazo muy ajustado y buscando poder entregar el mejor y más completo prototipo posible.

## El prototipo

Nuestro equipo, apodado Merge-narias, se ha decantado por realizar una app de mensajería, inspirándonos en nuestra favorita, Telegram.
Queriendo emular las funcionalidades de la plataforma original, así como su aspecto visual, hemos desarrollado una aplicación que permite al usuario registrarse, iniciar y cerrar sesión e intercambiar mensajes con sus contactos.

Como pide el enunciado original facilitado por KeepCoding, la plataforma cuenta con dos componentes principales:

1. Zona pública: la única vista para usuarios no registrados es el login.
2. Zona privada: la funcionalidad principal de envío de mensajes, sólo disponible para usuarios registrados.

Puedes acceder a los enunciados completos, tanto la versión oficial como nuestra adaptación, se encuentran en la carpeta `documents`.

## Vista previa

<div align=center>
<img src="" alt="preview"  />
</div>

## Ejecución

El primer paso para el deploy de la aplicación es tener instalado [Node JS](https://nodejs.org/) y clonarlo utilizando el comando:

```
git clone https://github.com/merge-narias/keepcoding-final-boss-mergegram.git
```

Y establecer las dependencias con:

```
npm install
```

El fichero `.env` es el que se utiliza para almacenar las variables de entorno, que son las que se utilizan para configurar el comportamiento de la aplicación. Como se suelen utilizar para almacenar información confidencial, como contraseñas de bbdd o claves de API, este fichero se encuentra includo en el `.gitignore` y se debe utilizar uno propio o solicitarnos el nuestro.

Para poder compilar el proyecto y desplegarlo en el servidor local se ha de utilizar:

```
npm run serve
```

Y con este comando se compila y _minifica_ el proyecto para producción:

```
npm run build
```

Esto creará una carpeta fuera de `src/` llamada `dist/`, donde se almacenarán los archivos finales ya procesados que irán desplegados en el servidor o web en producción definitiva (es el comando que hemos utilizado para el despliegue del proyecto en GitHub Pages).

> En Vue.js, los archivos procesados en modalidad de desarrollo (`npm run serve`) se almacenan directamente en memoria, ya que está _Webpack_ configurado para ello. Sólo se almacenarán en la carpeta `dist/` si creamos una _build_ en la modalidad de producción con `npm run build`. Para más información relevante sobre la estructura de carpetas de Vue.js recomendamos un vistazo a [este enlace](https://lenguajejs.com/vuejs/introduccion/estructura-carpetas/). Además, se puede acceder al manual de configuración de Vue CLI [pinchando aquí](https://cli.vuejs.org/config/).

## Stack tecnológico

<div align=center>
  <img src="@/assets/images/vscode.png" alt="visualstudiocode" width="50" />
  <img src="@/assets/images/github.png" alt="github" width="50" height="50" /> |
  <img src="@/assets/images/git.png" alt="git" width="50" height="50" /> |
  <img src="@/assets/images/html5.png" alt="html5" width="50" />
  <img src="@/assets/images/css3.png" alt="css3" width="50" />
  <img src="@/assets/images/typescript.png" alt="typescript" width="50" />
  <img src="@/assets/images/vuejs.png" alt="vuejs" width="50" />
  <img src="@/assets/images/nodejs.png" alt="nodejs" width="50" />
  <img src="@/assets/images/npm.png" alt="npm" width="50" />
  <img src="@/assets/images/express.png" alt="express" width="50" />
  <img src="@/assets/images/firebase.png" alt="firebase" width="50" /> |
  <img src="@/assets/images/openai.png" alt="openai" width="50" />
  <img src="@/assets/images/stack-overflow.png" alt="stackoverflow" width="50" />
</div>

<div align=right>
  <sub>
  <sup>
  Iconos de by <a href="https://iconscout.com/contributors/icon-mafia" target="_blank">Icon Mafia</a>, <a href="https://iconscout.com/contributors/becris" target="_blank">becris</a> y <a href="https://iconscout.com/contributors/icon-54" target="_blank">Icon 54</a>
  </sup>
  </sub>
</div>

## Algunos enlaces de interés

[Tablero kanban del proyecto](https://github.com/orgs/merge-narias/projects/5/views/1)

[Firebase de Google](https://firebase.google.com/)

[Aprende Git con Bitbucket Cloud](https://www.atlassian.com/es/git/tutorials/learn-git-with-bitbucket-cloud)

[¿Qué es el pair programming?](https://www.scrumio.com/blog/que-es-el-pair-programming/)

[¿Qué es Scrum?](https://www.atlassian.com/es/agile/scrum)

[Qué es Kanban y cómo aplicarlo al desarrollo de software](https://profile.es/blog/que-es-kanban-y-como-aplicarlo-al-desarrollo-de-software/)

[Taller EDteam: crea un clon de Telegram con Vue 3 y TypeScript](https://ed.team/cursos/clon-telegram)

## El equipo

Somos cinco mujeres con el común objetivo de poder dedicarnos profesionalmente al desarrollo web, gracias a la oportunidad que brindaba la beca de Glovo y KeepCoding pero, sobre todo, a nuestra "sangre, sudor y código" durante medio año, que culmina en este proyecto.
Somos conscientes que es un producto abierto todavía a muchas mejoras, y tenemos la intención de seguir trabajando en él, por lo que cualquier consejo por tu parte será bien recibido. Nos gustaría agradecerte que hayas visitado nuestra página y así nos conozcas un poco mejor. Si deseas ponerte en contacto con nosotras, puedes hacerlo a través de los enlaces listados a continuación o vía LinkedIn, acceso al cual encontrarás en nuestros respectivos perfiles:

[![Autor](https://img.shields.io/badge/-Silvia%20Gutiérrez%20Rodríguez-DAA520?style=flat&logo=github)](https://github.com/sigutier)

[![Autor](https://img.shields.io/badge/-Rebeca%20Méndez%20Villegas-00CED1?style=flat&logo=github)](https://github.com/mendezrebecav)

[![Autor](https://img.shields.io/badge/-Mª%20Pilar%20Casanueva%20David-32CD32?style=flat&logo=github)](https://github.com/pilinutopian)

[![Autor](https://img.shields.io/badge/-Clara%20Miranda%20Zapata-6A5ACD?style=flat&logo=github)](https://github.com/claraMirandaZ)

[![Autor](https://img.shields.io/badge/-Beatriz%20López%20Martín-CD5C5C?style=flat&logo=github)](https://github.com/blopmardev)

¡Además, sería genial si nos mandas un saludo y un mensaje indicando que has llegado desde aquí, estaremos encantadas de saber de ti!

<hr/>

<div align=center>
  <img src="" alt="mergelogo" width="75" />
  <br/>
  <sub><sup>Merge-narias | Febrero 2023</sup></sub>
</div>
