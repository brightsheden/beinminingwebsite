import React from 'react';

const OurProductsSection = () => {
  const productsData = [
    { name: 'Lithium', imageUrl: 'https://img.freepik.com/free-photo/closeup-colourful-mineral-stone-lights-isolated-white-background_181624-48306.jpg?w=740&t=st=1703252991~exp=1703253591~hmac=4787fb229290f81c5221f8c1412c499ecd2c6bc929c5362ebafcdc195739e485' },
    { name: 'Copper', imageUrl: 'https://img.freepik.com/free-photo/flat-lay-natural-rock-texture_23-2149091231.jpg?w=360&t=st=1703253286~exp=1703253886~hmac=3fbe5b9111737c32fc3e34699fc1f4e532b7aa53b67d1deef15e41e9823796ce' },
    { name: 'Lead', imageUrl: 'https://th.bing.com/th/id/R.41bac98a0b23e47ae9b105bd11e24091?rik=DyZ9dgdeDPF6zQ&riu=http%3a%2f%2fwww.chemistrylearner.com%2fwp-content%2fuploads%2f2018%2f07%2fLead-Pictures.jpg&ehk=73eDFZERGOYUoR6zuQM5WnpibwznYNbiI0ItiHTwgnA%3d&risl=&pid=ImgRaw&r=0' },
    { name: 'Zinc', imageUrl: 'https://th.bing.com/th/id/R.c8f03ff4ef34afa57e66460a4d992af4?rik=2GWhit284aq%2flw&pid=ImgRaw&r=0' },
    { name: 'Beryllium', imageUrl: 'https://th.bing.com/th/id/OIP.Fgs_EpOY4eaZ7nEPRIUOtAHaHa?rs=1&pid=ImgDetMain' },
    { name: 'Manganese', imageUrl: 'https://th.bing.com/th/id/R.fe88b14208e393f1b61afecce93fd340?rik=Iwt8V79plKbNHA&pid=ImgRaw&r=0&sres=1&sresct=1' },
    { name: 'Sapphire', imageUrl: 'https://gemstoneguru.com/wp-content/uploads/2013/05/Sapphire_32_Blue_Sapphire.png' },
    { name: 'Amethyst', imageUrl: 'https://meanings.crystalsandjewelry.com/wp-content/uploads/2019/03/Amethyst-1.jpg' },
    { name: 'Tourmaline', imageUrl: 'https://th.bing.com/th/id/R.02b620df6f9f4d96b63a94bec8fe9279?rik=ph%2biO30zoa4ZbA&pid=ImgRaw&r=0' },
    { name: 'Tanzanite', imageUrl: 'https://th.bing.com/th/id/OIP.DjOnFRN2xFLh_MZbcjh6JAHaJR?rs=1&pid=ImgDetMain' },
    { name: 'Tin and Columbite', imageUrl: 'https://th.bing.com/th/id/R.4c90c92e08a15d492bddfc8c584e7e8d?rik=n9T2y3Rpf3E15A&riu=http%3a%2f%2fmindatnh.org%2fgallery+photos%2fColumbite10.jpg&ehk=31T%2bnPnMJ%2b61ZoDiT0hAt1VmwZn9MV25P5dUj%2bmt1lk%3d&risl=&pid=ImgRaw&r=0' },
    { name: 'Gold', imageUrl: 'https://th.bing.com/th/id/OIP.oDm4rvx6F-d5rMlzf7n3wQHaG6?rs=1&pid=ImgDetMain' },
    { name: 'Diamonds', imageUrl: 'https://th.bing.com/th/id/OIP.zF8mlQ1P1dt8E68pbs8kBgHaIs?rs=1&pid=ImgDetMain' },
  ];

  return (
    <div className='my-8 '>

      <div className='text-center text-4xl leading-normal'>Our Products</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  ">
      {productsData.map((product, index) => (
        <div key={index} className="bg-white h-[100%] overflow-hidden border-2 w-full  p-6 rounded-lg shadow-md">
          <img src={product.imageUrl} alt={product.name} className="w-full h-[70%] rounded-md mb-4" />
          <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
          <p className="text-gray-700">Explore our high-quality {product.name} products.</p>
        </div>
      ))}
    </div>

    </div>
  
  );
}

export default OurProductsSection;
