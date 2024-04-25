# wpheadless
Headless stack with WordPress on the back-end and data entry with ACF and front-end with Faust.JS.

[//]: # (comments)

### Technologies

* LocalWP
* PHP v8.1.23
* NGINX
* MySQL v8.0.16
* WordPress
* GraphQL
* Advanced Custom Fields
* Faust.JS
* Next.JS
* Node.JS v20.12.2

---

### Repository structure

The folder and file structure of this repository were assembled by the application [LocalWP](https://localwp.com/).

```
root_folder/
│
├── app/
│ ├── public
│   └── wp-content/ WordPress application root
|     ├── plugins/
│     └── themes/
│       └── wptheme/ Simple theme for base information and ACF json
|         ├── acf-json/ JSON files from fields created with ACF plugin
|         ├── 404.php
|         ├── footer.php
|         ├── functions.php
|         ├── header.php
|         ├── index.php
|         ├── screenshot.png
│         └── style.css
│
└── app-node/ Front-end application root
```

---

### Running the project after downloading it

- When downloading the repository and adapting it to the LocalWP installation, activate the base theme and plugins on the WordPress side.
    - In the Faust.js plugin settings, in the "Front-end site URL" field, enter the front-end URL: http://localhost:3000
- In the repository root folder, go to the front-end root: app-node/
    - Install packages with: npm install
    - Run the project with: npm run dev
    - Open your browser at: http://localhost:3000
    - Done