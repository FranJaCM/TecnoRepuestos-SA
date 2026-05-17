// Prueba unitaria para TecnoRepuestos S.A.
function validarStock(actual, solicitado) {
    return solicitado <= actual;
}

test('Debe retornar true si hay stock suficiente', () => {
    expect(validarStock(10, 5)).toBe(true);
});

test('Debe retornar false si el pedido supera el stock', () => {
    expect(validarStock(10, 15)).toBe(false);
});