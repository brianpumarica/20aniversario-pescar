// const nuevop = document.createElement('p');

// const modal = document.createElement("div");
// modal.id = "modal";
// const submodal = document.createElement("div");
// submodal.id = "submodal" ;

// const input1 = document.createElement("input");
// input1.placeholder = "Nombre player 1"

// const input2 = document.createElement("input");
// input2.placeholder = "Nombre player 2"

// const boton = document.createElement("button");
// boton.innerHTML = "empezar juego"
// boton.addEventListener('click', e =>{
//     modal.remove( )
//     document.body.classList.remove("noscroll");
// })

// submodal.appendChild(input1);
// submodal.appendChild(input2);
// submodal.appendChild(boton);

// modal.appendChild(submodal);

// document.body.appendChild(modal);
// document.body.classList.add("noscroll");




// QUIEN.appendchild(nuevop);
// QUIEN.removechilf(nuevop);

// nuevop,remove();
//==============================
const d = new DOM( );
const btnIniciar = d.id('iniciar');
const tablero = d.query( 'main ul' );

btnIniciar.addEventListener( 'click', iniciarJuego );
let intentos = 0;
let cantCartas = 8;
let imgs = [];

for(let i = 1; i <= cantCartas; i++){
    imgs.push( `imagen0${i}.png` );
    imgs.push( `imagen0${i}.png` );
}






function iniciarJuego( ){
    tablero.innerHTML = '';
    intentos = 0;
    let active = true;
    let flipped = '';

    imgs = imgs.sort(function () {
        return Math.random() - 0.5;
    });

    imgs.forEach( i => {
        const li = d.create('li', { onclick: ( ) =>{
            if( ! active ) return;
            if( li.classList.contains('fija') ) return;

            active = false;
            li.classList.add('seleccionado');
            const li1 = li.getBoundingClientRect();
                console.log(li1.left)
            if( flipped === '' ){
                //esto significa que recién di vuelta la primera carta
                flipped = i;
                active = true;
                

            }else{
                //acá ya di vuelta las dos cartas...
                intentos++;
                const posi = li.getBoundingClientRect();
                console.log(posi.left)
                const acerto = flipped == i ;
                
                if( acerto ){

                    // if(li1.left == posi.left  && li1.top == posi.top){
                    //     li.classList.remove('seleccionado');
                    //     d.query('.seleccionado').classList.remove('seleccionado');
                    //     active = false;
                    //     flipped = ""
                        
                        
                    // }else{
                        li.classList.replace('seleccionado','fija');
                    d.query('.seleccionado').classList.replace('seleccionado','fija');
                    active = true;

                    const cuantosAcerte = d.queryAll('.fija');
                    if( cuantosAcerte.length == imgs.length ){
                        gameOver( );
                    }
                
                }else{
                    setTimeout(
                        function( ){
                            li.classList.remove('seleccionado');
                            d.query('.seleccionado').classList.remove('seleccionado');
                            active = true;
                        },
                        1000
                    );
                }
                flipped = '';
            }

        } });
        const img1 = d.create('img', { src: 'imagenes/pescarCartaDorso.png' } );
        const img2 = d.create('img',{ src: `imagenes/${i}` });
        
        d.append( [img1, img2], li );
        d.append( li, tablero );
    } );

}


function gameOver( ){
    const modal = d.create('div', { id: 'modal' } );
    const subm = d.create('div');
    const h2 = d.create('h2', { innerHTML: 'GANASTE!!!' });
    const p = d.create('p', { innerHTML: `Lo hiciste en ${intentos} intentos` } );
    const cerrar = d.create('a',{ href: 'javascript:void(0)', innerHTML: 'cerrar', onclick: function( ){ modal.remove();  }, className: 'cerrar-modal' });
    d.append( [h2,p,cerrar], subm );
    d.append( subm, modal );
    d.append( modal );
}

iniciarJuego( );

console.log(imgs)
//=======================================================================
