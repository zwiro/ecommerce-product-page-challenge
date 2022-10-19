const cartBtn = document.querySelector('#cart-icon');
const thumbnailPic1 = document.querySelector('#thumbnail-1');
const thumbnailPic2 = document.querySelector('#thumbnail-2');
const thumbnailPic3 = document.querySelector('#thumbnail-3');
const thumbnailPic4 = document.querySelector('#thumbnail-4');
const modalThumbnailPic1 = document.querySelector('#modal-thumbnail-1');
const modalThumbnailPic2 = document.querySelector('#modal-thumbnail-2');
const modalThumbnailPic3 = document.querySelector('#modal-thumbnail-3');
const modalThumbnailPic4 = document.querySelector('#modal-thumbnail-4');
const removeQtyBtn = document.querySelector('#remove-btn');
const addQtyBtn = document.querySelector('#add-btn');
const addToCartBtn = document.querySelector('#add-to-cart');
const modal = document.querySelector('.modal');
const cartSummary = document.querySelector('.cart-summary');
const deleteBtn = document.querySelector('#delete-icon');
const cartQty = document.querySelector('#cart-qty');
const cartPrice = document.querySelector('#cart-price');
const cartContent = document.querySelector('.cart-item');
const checkoutBtn = document.querySelector('#checkout-btn');
const itemQty = document.querySelector('#item-chosen-qty');
const emptyCardMsg = document.querySelector('#empty-cart');
const mainPic = document.querySelector('#main-picture');
const modalMainPic = document.querySelector('#modal-main-pic');
const previousModal = document.querySelector('.modal-back');
const nextModal = document.querySelector('.modal-next');
const closeModal = document.querySelector('.modal-close');
const expandMenuBtn = document.querySelector('#expand-menu');
const expandedMenu = document.querySelector('.expanded-menu');
const closeExpandedMenu = document.querySelector('#expand-close');
const previousPicBtn = document.querySelector('.previous-btn');
const nextPicBtn = document.querySelector('.next-btn');
const notificationNum = document.querySelector('#notification-number');

cartQty.innerText = 0;
cartPrice.innerText = 0;

cartBtn.addEventListener('mouseout', () => {
    const delay = setTimeout(() => {
        cartSummary.classList.add('hidden');
    }, 1000);
    clearTimeout(delay);
});

cartBtn.addEventListener('mouseover', () => {
    cartSummary.classList.remove('hidden');
});

cartSummary.addEventListener('mouseover', () => {
    cartSummary.classList.remove('hidden');
});

cartSummary.addEventListener('mouseout', () => {
    cartSummary.classList.add('hidden');
});

removeQtyBtn.addEventListener('click', () => {
    if (itemQty.innerText == 0) {
        return;
    } else {
        itemQty.innerText--
    }
});

addQtyBtn.addEventListener('click', () => {
    itemQty.innerText++
});

addToCartBtn.addEventListener('click', () => {
    if (itemQty.innerText == 0) {
        return;
    } else {
        let numItem = parseInt(itemQty.innerText);
        let numCart = parseInt(cartQty.innerText);
        numCart += numItem;
        cartQty.innerText = numCart;
        cartPrice.innerText = numCart * 125;
        cartPrice.innerText = parseInt(cartPrice.innerText).toLocaleString('en-us', { style: "currency", currency: "USD" });
        cartSummary.classList.remove('hidden');
        checkoutBtn.classList.remove('hidden');
        cartContent.classList.remove('hidden');
        notificationNum.classList.remove('hidden')
        emptyCardMsg.classList.add('hidden');
        emptyCardMsg.classList.remove('empty-cart');
        notificationNum.innerText = numCart;
        itemQty.innerText = 0;
    }
});

deleteBtn.addEventListener('click', () => {
    if (cartQty.innerText == 1) {
        emptyCardMsg.classList.add('empty-cart');
        cartContent.classList.add('hidden');
        checkoutBtn.classList.add('hidden');
        emptyCardMsg.classList.remove('hidden');
        notificationNum.classList.add('hidden');
        cartQty.innerText = 0
    } else {
        cartQty.innerText--
        notificationNum.innerText = cartQty.innerText;
        cartPrice.innerText = cartQty.innerText * 125;
        cartPrice.innerText = parseInt(cartPrice.innerText).toLocaleString('en-us', { style: "currency", currency: "USD" });
    }
});

thumbnailPic1.addEventListener('click', () => {
    thumbnailPic2.classList.remove('chosen-picture-thumbnail');
    thumbnailPic1.classList.add('chosen-picture-thumbnail');
    thumbnailPic3.classList.remove('chosen-picture-thumbnail');
    thumbnailPic4.classList.remove('chosen-picture-thumbnail');
    mainPic.src = 'images/image-product-1.jpg';
});

thumbnailPic2.addEventListener('click', () => {
    thumbnailPic1.classList.remove('chosen-picture-thumbnail');
    thumbnailPic2.classList.add('chosen-picture-thumbnail');
    thumbnailPic3.classList.remove('chosen-picture-thumbnail');
    thumbnailPic4.classList.remove('chosen-picture-thumbnail');
    mainPic.src = 'images/image-product-2.jpg';
});

thumbnailPic3.addEventListener('click', () => {
    thumbnailPic1.classList.remove('chosen-picture-thumbnail');
    thumbnailPic3.classList.add('chosen-picture-thumbnail');
    thumbnailPic2.classList.remove('chosen-picture-thumbnail');
    thumbnailPic4.classList.remove('chosen-picture-thumbnail');
    mainPic.src = 'images/image-product-3.jpg';
});

thumbnailPic4.addEventListener('click', () => {
    thumbnailPic1.classList.remove('chosen-picture-thumbnail');
    thumbnailPic4.classList.add('chosen-picture-thumbnail');
    thumbnailPic3.classList.remove('chosen-picture-thumbnail');
    thumbnailPic2.classList.remove('chosen-picture-thumbnail');
    mainPic.src = 'images/image-product-4.jpg';
});

mainPic.addEventListener('click', () => {
    modal.classList.remove('hidden');
    modalMainPic.src = mainPic.src;
});

modalThumbnailPic1.addEventListener('click', () => {
    modalThumbnailPic2.classList.remove('chosen-picture-thumbnail');
    modalThumbnailPic1.classList.add('chosen-picture-thumbnail');
    modalThumbnailPic3.classList.remove('chosen-picture-thumbnail');
    modalThumbnailPic4.classList.remove('chosen-picture-thumbnail');
    modalMainPic.src = 'images/image-product-1.jpg';
});

modalThumbnailPic2.addEventListener('click', () => {
    modalThumbnailPic1.classList.remove('chosen-picture-thumbnail');
    modalThumbnailPic2.classList.add('chosen-picture-thumbnail');
    modalThumbnailPic3.classList.remove('chosen-picture-thumbnail');
    modalThumbnailPic4.classList.remove('chosen-picture-thumbnail');
    modalMainPic.src = 'images/image-product-2.jpg'
});

modalThumbnailPic3.addEventListener('click', () => {
    modalThumbnailPic1.classList.remove('chosen-picture-thumbnail');
    modalThumbnailPic3.classList.add('chosen-picture-thumbnail');
    modalThumbnailPic2.classList.remove('chosen-picture-thumbnail');
    modalThumbnailPic4.classList.remove('chosen-picture-thumbnail');
    modalMainPic.src = 'images/image-product-3.jpg'
});

modalThumbnailPic4.addEventListener('click', () => {
    modalThumbnailPic1.classList.remove('chosen-picture-thumbnail');
    modalThumbnailPic4.classList.add('chosen-picture-thumbnail');
    modalThumbnailPic3.classList.remove('chosen-picture-thumbnail');
    modalThumbnailPic2.classList.remove('chosen-picture-thumbnail');
    modalMainPic.src = 'images/image-product-4.jpg'
});

previousModal.addEventListener('click', () => {
    if (modalMainPic.src.includes('product-1')) {
        modalMainPic.src = 'images/image-product-4.jpg';
    } else if (modalMainPic.src.includes('product-2')) {
        modalMainPic.src = 'images/image-product-1.jpg';
    } else if (modalMainPic.src.includes('product-3')) {
        modalMainPic.src = 'images/image-product-2.jpg';
    } else modalMainPic.src = 'images/image-product-3.jpg';
});

nextModal.addEventListener('click', () => {
    if (modalMainPic.src.includes('product-1')) {
        modalMainPic.src = 'images/image-product-2.jpg';
    } else if (modalMainPic.src.includes('product-2')) {
        modalMainPic.src = 'images/image-product-3.jpg';
    } else if (modalMainPic.src.includes('product-3')) {
        modalMainPic.src = 'images/image-product-4.jpg';
    } else modalMainPic.src = 'images/image-product-1.jpg';
});

closeModal.addEventListener('click', () => {
    modal.classList.add('hidden');
});

expandMenuBtn.addEventListener('click', () => {
    expandedMenu.style.left = 0;
});

closeExpandedMenu.addEventListener('click', () => {
    expandedMenu.style.left = '-100%';
});

previousPicBtn.addEventListener('click', () => {
    if (mainPic.src.includes('product-1')) {
        mainPic.src = 'images/image-product-4.jpg';
    } else if (mainPic.src.includes('product-2')) {
        mainPic.src = 'images/image-product-1.jpg';
    } else if (mainPic.src.includes('product-3')) {
        mainPic.src = 'images/image-product-2.jpg';
    } else mainPic.src = 'images/image-product-3.jpg';
});

nextPicBtn.addEventListener('click', () => {
    if (mainPic.src.includes('product-1')) {
        mainPic.src = 'images/image-product-2.jpg';
    } else if (mainPic.src.includes('product-2')) {
        mainPic.src = 'images/image-product-3.jpg';
    } else if (mainPic.src.includes('product-3')) {
        mainPic.src = 'images/image-product-4.jpg';
    } else mainPic.src = 'images/image-product-1.jpg';
});

checkoutBtn.addEventListener('click', () => {
    emptyCardMsg.classList.add('empty-cart');
    cartContent.classList.add('hidden');
    checkoutBtn.classList.add('hidden');
    emptyCardMsg.classList.remove('hidden');
    notificationNum.classList.add('hidden');
    cartQty.innerText = 0
})