import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';


ReactDOM.render(
<div className='container'>
	<App title='T shirts' cost = '999.00' sizesAvailable='XXL,XL,L,M,S,XS' defaultSizeSelected='M' url="http://shimplypageimage.s3.amazonaws.com/47489/original.?1427954604" />
	<App title='Jeans' cost = '3999.00' sizesAvailable='XXXL,XXL,XL,L,M,S,XS' defaultSizeSelected='L' url="https://s-media-cache-ak0.pinimg.com/originals/41/e7/78/41e778be843780c57672de82a24e5799.jpg" />
	<App title='Shirts & Jackets' cost = '7999.00' sizesAvailable='XXL,XL,L,M,S,XS' defaultSizeSelected='XL' url="http://levistrauss.com/wp-content/uploads/2015/05/150319_Levis_Store_Berlin_167.jpg" />
	<App title='Custom Fittings' cost = '999.00 ~ 9999.00' sizesAvailable='XXL,XL,L,M,S,XS' defaultSizeSelected='s' url="http://1.bp.blogspot.com/-LjpyQXH1BEw/UYwZnV4fmxI/AAAAAAAA1qs/EztInjBr6W4/s1600/Levi-s-Curve-windows-Spring-2012-London-02.jpg"/>
</div>,document.getElementById('myApp'));

