const productosCtrl = {};
const Productos  = require('../models/productos')
// const MercadoPagoSchema  = require('../models/mercadopago')
const mercadopago = require ('mercadopago');

// API
productosCtrl.getProductos = async (req,res) =>{

const productos = await Productos.find();
res.json(productos);

};

productosCtrl.newProductos = async(req,res) => {
    const productos = new Productos({
       titulo: req.body.titulo,
       subtitulo: req.body.subtitulo,
       categoria: req.body.categoria,
       descripcion1: req.body.descripcion1,
       descripcion2: req.body.descripcion2,
       descripcion3: req.body.descripcion3,
       descripcion4: req.body.descripcion4,
       descripcion5: req.body.descripcion5,
       imagen1: req.body.imagen1,       
       imagen2: req.body.imagen2,       
       imagen3: req.body.imagen3,       
       imagen4: req.body.imagen4,       
       imagen5: req.body.imagen5,       
       fecha: req.body.fecha,
       vistas: req.body.vistas,

    });
       await productos.save();
       res.json('Guardado');

};

 productosCtrl.getProducto = async(req,res) => { 
    const productos = await Productos.findById(req.params.id);
    res.json(productos);

};

productosCtrl.modificarProducto = async (req,res) => {
    const { id } = req.params;
    const producto = {  titulo: req.body.titulo,
        subtitulo: req.body.subtitulo,
        categoria: req.body.categoria,
        descripcion1: req.body.descripcion1,
        descripcion2: req.body.descripcion2,
        descripcion3: req.body.descripcion3,
        descripcion4: req.body.descripcion4,
        descripcion5: req.body.descripcion5,
        imagen1: req.body.imagen1,       
        imagen2: req.body.imagen2,       
        imagen3: req.body.imagen3,       
        imagen4: req.body.imagen4,       
        imagen5: req.body.imagen5,       
        fecha: req.body.fecha,
        vistas: req.body.vistas
    };
    
       await Productos.findByIdAndUpdate(id, {$set: producto}, {new: true});
       res.json('actualizado');

};

productosCtrl.deleteProducto = async (req,res) => {
    const { id } = req.params;
    await Productos.findByIdAndDelete(id);
    res.json("eliminado");
};

//Mercadopago

productosCtrl.nuevoPago = async (req,res) => {
    var { id } = req.params
     id = Number(id);
     mercadopago.configure({access_token: 'TEST-422141643250773-060218-f9f1edbfaa14164e44c3b4b0f71287ae-26856840'});
   
  let preference = { 

    back_urls: {
        success: "http://192.168.43.55:4200/modulocompras/comprasfin/",
        failure: "http://192.168.43.55:4200/modulocompras/comprasfin/",
        pending: "http://192.168.43.55:4200/modulocompras/comprasfin/"
    },
    auto_return: "approved",
      
    items: [
        { title: 'Resto La Malvada Delivery',
          unit_price: (id),
          currency_id: 'ARS',
          quantity: 1,
          
        }
            ]

       
    
    };
  
    await mercadopago.preferences.create(preference)
    .then(function(res){  
    global.init_point = res.body.init_point;
    console.log(global.init_point)}).catch(function(error){console.log(error);});
    res.json({link: (global.init_point)}); 
};



productosCtrl.pagoResp = async (req,res) => {
        await  res.json(req.query);    
        console.log('loquellega',req.query)
        
        


};



module.exports = productosCtrl