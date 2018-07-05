# assignment
Your task is to create onepage application with list of clients and their details using React
(https://reactjs.org/) and Semantic-UI framework (https://semantic-ui.com/). Clients data are
stored in 'clients.json' which will be loaded dynamicaly via XHR.

# wireframe description
- **clients list:** Every item will display smaller avatar (in json there is only one avatar size, so feel free to resize it). Next to
the avatar there will be clients name and job title. When user clicks on an item, it will display client's
details on the right.
- **search:** Above this list there will be search bar. It will search all informations, not only those showed in the clients
list. Results will be displayed instead of list of clients and they will show instantly as user starts to type.
- **client's details:** Pretty self-explanatory, on the left there will be full size avatar (128x128px), next to it big clients name,
smaller job title and company name ("{job.title} - {job.company}") below this name. Next there will be all
other clients informations like address, and contact informations.

### demo - https://engelsun.github.io/test-task-client-app/

[![demo](https://user-images.githubusercontent.com/26378027/42257877-8056e866-7f61-11e8-9154-8998bede8db5.png)](https://engelsun.github.io/test-task-client-app/)
