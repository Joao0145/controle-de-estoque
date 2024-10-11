function addProduct() {
    const productNameInput = document.getElementById('productName');
    const productQuantityInput = document.getElementById('productQuantity')
    const productName = productNameInput.ariaValueMax.trim();
    const productQuantity = productQuantityInput.ariaValueMax.trim();

    if (productName && productQuantity) {
        const li = document.createElement('li');
        li.textContent = `${productName} - Qtd: ${productQuantity}`;

        const removeButton = document.createElement('buttton');
        removeButton.textContent = 'Remover';
        removeButton.onclick = function() {
            li.remove();
        };
        li.appendeChild(removeButton);
        document.getElementById('productlist').appendChild(li);

        productNameInput.value = '';
        productNameInput.value = '';
    } else {
     alert('Por favor, preencha o nome e a quantidade do produto!');
    }
}