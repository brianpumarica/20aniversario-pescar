// const DOM = function(){
//     this.id = str => document.getElementById(str);
//     this.query = selector => document.querySelector(selector);
//     this.queryAll = selector =>document.querySelectorAll(selector);
//     this.create = (tag, attrs = {}) => Object.assign( document.createElement(tag), attrs );
//     this.remove = element =>{  element.remove( );}
//     this.append = (hijo, padre = document.body) =>
//     { hijo.instanceOf(), 
//       padre.appendChild(hijo);}
//     }

const DOM = function( ){
    //publica... this.loquesea es accesible desde afuera de la función como VARIABLE.loquesea
    this.id = str => document.getElementById(str);
    this.query = selector => document.querySelector(selector);
    this.queryAll = selector => document.querySelectorAll( selector );
    this.create = (tag, attrs = { }) => Object.assign( document.createElement(tag), attrs );
    this.remove = element =>{ element.remove( ); }
    this.append = (hijo, padre = document.body) =>  {
        ( hijo instanceof Array ) ?
        hijo.map( h => { padre.appendChild(h) } ) :
        padre.appendChild( hijo ); 
    }
}

// const d = new DOM();
// const datos = d.id('datos');
// const modal = d.create('div',{id: 'modal'})
// const input1 = d.create( 'input', {placeholder : "placeholder",id:'input1',
// name:'playeruno',
// tabIndex:'10'});
// const input2 = d.create( 'input', {placeholder : "placeholderdos",id:'input2',
// name:'playedos',
// tabIndex:'11'});
// const boton = d.create('button',{innerHTML : "JUGAR "})

// d.append(input1,modal);
// d.append(input2,modal);
// d.append(boton,modal);
// d.append(modal)