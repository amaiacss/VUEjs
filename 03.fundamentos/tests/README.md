## COMO HACER PRUEBAS UNITARIAS
    ### jest es el modulo que hace las pruebas, puedo verlo en package.json

    Dentro de la carpeta tests/unit , es necesario/aconsejable replicar la estructura de las carpetas de la aplicación de la zona que se quiere testear,  por ejemplo en este caso, hay que crear'tests/unit/components'.

    Usamos el archivo example.spec.js para las pruebas( en la carpeta tests/unit )
    
  ### Ejecutar la prueba unitaria en la terminal
    ubicarse en la carpeta padre de 'tests', en este caso ( 03.fundamentos )
    npm run test:unit

    -- Si se realiza algún cambio en el componente compará y pasará el test o no. Para actualizar la snapshot del componente se hace
        una pista que da la terminal al ejecutar run test, pone que estña obsoleto, ejecutando el siguiente comando actualiza el caché
    npm run test:unit -u

    -- Para evaluar / ejecutar un test concreto y no todos los test
    npm run test:unit counter (nombre del test)

    