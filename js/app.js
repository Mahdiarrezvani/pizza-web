let imagesGallerySrc = ['asset/Gallery/Rectangle 11.png', 'asset/Gallery/Rectangle 12.png', 'asset/Gallery/Rectangle 13.png', 'asset/Gallery/Rectangle 14.png'];
let infoStaff = [
    { name: 'braylen earleen', star: '* * * * * *', type: 'chef', srcImage: 'asset/person/Ellipse 12-1.png' },
    { name: 'braylen earleen', star: '* * * * * *', type: 'chef', srcImage: 'asset/person/Ellipse 12-2.png' },
    { name: 'braylen earleen', star: '* * * * * *', type: 'chef', srcImage: 'asset/person/Ellipse 12.png' },
    // { name: 'braylen earleen', star: '* * * * * *', type: 'chef', srcImage: '' },
    // { name: 'braylen earleen', star: '* * * * * *', type: 'chef', srcImage: '' },
];
// 
let galleryContainer = document.querySelector('.image-gallery');
imagesGallerySrc.forEach(function(src) {
    galleryContainer.insertAdjacentHTML('beforeend', `
    <div><img src="${src}" alt="" /></div>
    `);
});
// 
let staffContainer = document.querySelector('.info-staff');
infoStaff.forEach(function(info) {
    staffContainer.insertAdjacentHTML('beforeend', `
    <div class="staff">
        <div><img src="${info.srcImage}" alt="" /></div>
        <p class="star">${info.star}</p>
        <p class="name-staff">${info.name}</p>
        <p class="type">${info.type}</p>
    </div>
    `);
});
let foods = document.querySelector('.foods');