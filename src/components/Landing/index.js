import React from 'react';
import LogoBq from '../LogoBq';
import NavigationButton from '../NavigationButton';


const Landing = () => (

	<div>
		<div>
			<LogoBq />
		</div>
		<div>
			<NavigationButton route={'/#order'} name={'Mesero'} />
			<NavigationButton route={'/#'} name={'Cocina'} />
			<NavigationButton route={'/#'} name={'Administrador'} />
		</div>

	</div>
);
export default Landing;

 /* 

			<Button name="Mesero" action={()=>console.log('holi')}   />
			<Button name="Cocina" action={()=>console.log('holi')} />
			<Button name="Administrador" action={()=>console.log('holi')} /> 
			*/