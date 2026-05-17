// Funciones de negocio para TecnoRepuestos S.A. 
const validarStock = (actual, solicitado) => solicitado <= actual;
const calcularTotal = (precio, cantidad) => precio * cantidad;

// Pruebas Unitarias [cite: 165]
test('Debe aprobar venta si hay stock', () => {
    expect(validarStock(10, 5)).toBe(true);
});

test('Debe calcular el total correctamente', () => {
    expect(calcularTotal(10, 3)).toBe(30);
});