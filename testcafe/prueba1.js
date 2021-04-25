import pagina from './pageObjectModel';

fixture('Primeras pruebas en test cafe')
    .page('https://devexpress.github.io/testcafe/example/');

test('Probar que la pagina abre', async t =>{
    await t    
});

test('Probar que se escribe el nombre', async t =>{
    await t
    .typeText(pagina.nameDev,'Saida Reyes')
    .expect(pagina.nameDev.value).eql('Saida Reyes');
});

test('Probar que se selecciona el checkbos remote testing', async t =>{
    await t    
    .click(pagina.checkboxRemoteTest)
    .expect(pagina.checkboxRemoteTest.checked).ok();
});

test('Probar que se selecciona  linux', async t =>{
    await t    
    .click(pagina.radioButtonLinux)
    .expect(pagina.radioButtonLinux.checked).ok();
});


test('Probar que se selecciona  javascript', async t =>{
    await t    
    .click(pagina.listaInterface)
    .click(pagina.elementJavascriptApi)
    .expect(pagina.elementJavascriptApi.value).ok()
    .expect(pagina.elementJavascriptApi.selected).ok()
});

test('Probar que se escribe en text area', async t =>{
    await t    
    .click(pagina.checkboxTriedTC)
    .typeText(pagina.textArea,'Welcome to test cafe',{speed: 0.1})
    .typeText(pagina.textArea,'\nSalto de linea')
    .typeText(pagina.textArea,'Ahora sucede esto', {replace: true, speed: 0.1})
    .expect(pagina.textArea.value).eql('Ahora sucede esto')

    
});

test('Probar mover el slider', async t =>{
    await t    
    .click(pagina.checkboxTriedTC)
    .expect(pagina.checkboxTriedTC.checked).ok()
    
    .dragToElement(pagina.slider.handle, pagina.slider.tick.withText('9'))
   // .click(pagina.s)
});