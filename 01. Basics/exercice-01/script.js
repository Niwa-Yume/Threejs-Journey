import * as THREE from 'three';
//canvas est un élément HTML qui sert de conteneur pour le rendu 3D
const canvas = document.querySelector('canvas.webgl');

//DECLARATION SCENE
const scene = new THREE.Scene();

//TOUT OBJET DE NOTRE SCENE 3D
const geometry = new THREE.BoxGeometry(1, 1, 1);

//meshBasicMaterial est un type de material qui ne réagit pas à la lumière
const material = new THREE.MeshBasicMaterial({ color: 0xff0000, });//rouge

//Mesh sert à combiner la géométrie et le material pour former un objet 3D
const mesh = new THREE.Mesh(geometry, material);




//ajouter l'objet à la scène pour qu'il soit rendu
scene.add(mesh);



//camera est un point de vue sur la scène qui a des propriétés comme la position, la rotation, etc.
// Sizes
const sizes = {
    width: 800,
    height: 600
}
//PerspectiveCamera est un type de camera qui simule la vision humaine
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3 //position de la camera sur l'axe z chiffre POSITIF = vers l'avant et négatif = vers l'arrière
scene.add(camera)


//RENDER 3D qui sert à afficher la scène 3D
//renderer est un moteur de rendu qui va afficher la scène à l'intérieur du canvas
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
    //le moteur choisit la balise canvas pour afficher la scène 3D et utilise la variable canvas pour cela
});


renderer.setSize(sizes.width, sizes.height);//définir la taille du rendu à la taille dféfinie dans la variable sizes
renderer.render(scene, camera);//afficher la scène à l'intérieur du canvas avec la camera


