suite('Тесты страницы "About..."', ()=>{
    test('Страница должна содержать ссылку на страницу контактов', ()=>{
        assert($('a[href="/contact"]').length);
    });
});