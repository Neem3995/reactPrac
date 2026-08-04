// function Article() {
//     return (
//         <h1>Hola Article Mundo</h1>
//     )
// }

// export default Article;

// other ways to export a component 
// export default function Article() {
//     return (
//         <h1>Hola Article Mundo</h1>
//     )
// }
// basically writing the first function but backwards
// we start with the export default then we write the function name 
// followed by () {} 
// inside the curly brackets we add the return func and 
// inside the return func we add the jsx code, in this case its the <h1>Hola Article Mundo</h1> tag

// exporting using an arrow function   
// for the arrow function we start with const 
// name the component, in this case Article
// then we set it "=" to the arrow function () => {}
// then we return the jsx code in the ex below its the <h1>Hola Article Mundo</h1> tag
// finally we close the function and add "export default (name of the function)"
const Article = () => {
    return (
        <h1>Hola Article Mundo</h1>
    )
}

export default Article;

// MAKE SURE WHEN YOU EXPORT A COMPONENT YOU IMPORT IT TO THE APP.JSX FILE!!!!!!
// MAKE SURE IT IS IN THE RIGHT DIRECTORY, IF IT IS NOT IN THE RIGHT DIRECTORY IT WILL NOT WORK!!!!! 
// DONT BE BRAINDEAD AND DOUBLE CHECK THE DIRECTORY, IT IS A COMMON MISTAKE TO MAKE!!!!!!