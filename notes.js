const fs=require('fs');

var fetchNotes = () => {
    try {
        var noteString=fs.readFileSync('notes-data.json');
        return JSON.parse(noteString);
    } catch (e) {
        return [];
    }
} 

var saveNotes=(notes) => {

    fs.writeFileSync('notes-data.json',JSON.stringify(notes));

}

var addNote = (title, body) => {

    var notes = fetchNotes() ;
    var note ={
        title,
        body
    }

    var duplicateNotes= notes.filter( (note) => {
            return note.title === title;
    } )
    
    if(duplicateNotes.length === 0 ){
        notes.push(note);
        saveNotes(notes);
        return note;
    }
   

};

var getAll = () => {

    return fetchNotes();
};

var removeNote= (title) =>{
    var notesArray=fetchNotes();

    var refinedArray = notesArray.filter( (note) =>{

        return note.title != title;
    }
    )
    saveNotes(refinedArray);

    return refinedArray.length != notesArray.length ;
}

var readNote = (title) => {
    var notesArray=fetchNotes();
    var noteFound=notesArray.filter( (note) => {
        return note.title === title;
    })
    if(noteFound){
        return noteFound[0];
    }
}

var logNotes = (note) => {

        //adding debugger

        debugger;

        console.log('--');
        console.log('Title : ', note.title);
        console.log('Body : ', note.body);
}

module.exports={
    addNote,//addNote: addNote
    getAll,
    removeNote,
    readNote,
    logNotes
}
