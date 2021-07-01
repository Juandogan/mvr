const mongoose = require('mongoose');
const { Schema } = mongoose;

const CardSchema = new Schema ({
                            
    categoria:{type : String, required : false},
    titulo:{type : String, required : false},
    subtitulo:{type : String, required : false},

    imagen1:{type : String, required : false},
    imagen2:{type : String, required : false},
    imagen3:{type : String, required : false},
    imagen4:{type : String, required : false},
    imagen5:{type : String, required : false},


    descripcion1:{type : String, required : false},
    descripcion2:{type : String, required : false},
    descripcion3:{type : String, required : false},
    descripcion4:{type : String, required : false},
    descripcion5:{type : String, required : false},
    vistas:{type : Number, require : false},
    creado: { type: Date, default: Date.now },
    

  
   
     
});

module.exports = mongoose.model('CardSchema', CardSchema);

