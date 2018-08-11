# node-js-course-project-notes-node
Desription: A simple code that keeps track of notes made by user

Hello users , 
  Before using the applications you must do the following steps:

1)Install node.js at it's newest version from https://nodejs.org

2)Navigate to the node-js-course-project-notes-node directory using the command prompt/terminal

3) use the command ' npm install ' to install the modules required for the application

4)Now you are able to use the app!!

Files & Directories in the app:

1)playground
    As the name suggests it contains the sample code to play around with the various features of node.js.Feel free to navigate with the simple commands
 
2)app.js
    It is the main file to start the app
    
    The app has 4 features or commands to use:
    a)add:
      The command adds a new note to the list of notes.
      To add note use the command prompt/terminal to naviagte to node-js-course-project-notes-node directory
      Use : node app.js add -t "note-title" -b "note-body" 
        in the command prompt/terminal

    b)list:
      The command gives the title of list of notes present.
      To list note use the command prompt/terminal to naviagte to node-js-course-project-notes-node directory
      Use : node app.js list 
        in the command prompt/terminal
    
    c)read:
      The command gives the details  present in a note.
      To read note use the command prompt/terminal to naviagte to node-js-course-project-notes-node directory
      Use : node app.js read -t "note-title" 
        in the command prompt/terminal
        
    c)remove:
      The command deletes a given node from the list of note.
      To remove note use the command prompt/terminal to naviagte to node-js-course-project-notes-node directory
      Use : node app.js remove -t "note-title" 
        in the command prompt/terminal
        
3)notes.js
    It contains the function to execute the commands
   
4)notes-data.json
    It contains the data of notes in json format

5)package.json and package-lock.json
    It contains the dependencies and the details of the project
