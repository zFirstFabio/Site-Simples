
const loadProducts = (produtos, idDivParent) => {
    const parentDiv = document.querySelector(idDivParent)
    produtos.forEach( produto => {

        const html = `
        <article class="pro">
        <img src="${produto.image}" alt="${produto.title}">
        <h4>${produto.title}</h4>
        <h4>R$ ${produto.value}</h4>
        <p>${produto.description}</p>
        <button type="button" onclick="modaltrigger(${produto.id})"> Adcionar ao carrinho </button>
        </article>
       `   
    parentDiv.insertAdjacentHTML('beforeend', html)
       
    })
}

const modaltrigger = (productId) => {
    const modal = document.querySelector('.modal')

    if(productId != null ){
        const produto = produtos.filter( produto => produto.id == productId )[0]
        if(produto != null){
            modal.querySelector('#title').value = produto.title
        }
    }

    modal.classList.contains('hide') == true ? modal.classList.remove('hide') : modal.classList.add('hide')
    
}

const whatsappLinkGenerator = (phoneNumber, productTitle, productQuantity, buyerName, buyerAddress, buyerPayment) =>
 `https://api.whatsapp.com/send?phone=${phoneNumber}&text=Ola eu quero:
 ${productQuantity} ${productTitle} - Entregar para ${buyerName} no endereco: ${buyerAddress} 
 - A forma de pagamento sera: ${buyerPayment}`

const checkout = phoneNumber =>{
    const form = document.querySelector('#form-product')

    form.addEventListener('submit', e => {
        e.preventDefault()

        const productTitle = form.querySelector('input#title').value
        const productQuantity = form.querySelector('input#quantity').value
        const buyerName = form.querySelector('input#name').value
        const buyerAddress = form.querySelector('input#adress').value
        const buyerPayment = form.querySelector('select#payment').value
        
    const whatsappUrl = whatsappLinkGenerator(phoneNumber,productTitle, productQuantity, buyerName, buyerAddress, buyerPayment)

    window.location.href = whatsappUrl

    } )
}



loadProducts(produtos, '#product-div')
checkout('55987456321')