const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

var titleOptions = {
    describe:'Title of node',
    demand: true,
    alias:'t'
} ;

var bodyOptions={
    describe:'Body of the note',
    demand: true,
    alias:'b'
} ;
const notes = require('./notes.js');
const argv = yargs
    .command('add','Add a new note',{
        title:titleOptions,
        body:bodyOptions
    })
    .command('list','List all nodes')
    .command('read','Read the node with a given title',{
        title:titleOptions
    })
    .command('remove','Remove note with a given title',{
        title:titleOptions
    })
    .help()
    .argv;

var command = argv._[0];

//console.log(process.argv);


//console.log('Command',command);

if(command==='add'){
    
    var newNote=notes.addNote(argv.title,argv.body);
    if(newNote == null ){
        console.log('no new note created');
    }
    else{
        console.log('Note Added');
        notes.logNotes(newNote);
    }

}else if (command === 'list'){
    
    var notesList=notes.getAll();
    console.log(`Printing ${notesList.length} note(s)`);

    notesList.forEach( (note) => {
         notes.logNotes(note);
    });

}else if (command === 'read'){

    var note=notes.readNote(argv.title);

    if(note) {
        console.log('Note Fetched');
        notes.logNotes(note);
    }else{
        console.log('Node not found');
    }


}else if (command === 'remove'){

    var NoteRemoved = notes.removeNote(argv.title);

    var message = NoteRemoved ? 'Note was removed ' : 'Note not found';
    
    console.log(message);

}else{
    console.log('Command not recognized');
}
