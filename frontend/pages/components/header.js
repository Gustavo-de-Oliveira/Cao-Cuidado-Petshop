import React from 'react';
import NextLink from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Container, Image, Col, Row, Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';

export default function Header() {
  return (
    <Container>
    	<header>
			<Navbar className="d-flex navbar-up">
				<Col class="header-left-container">
					<Navbar.Brand href="/">
						<img src="../../src/images/Logo_white.png" width="75px"/>
					</Navbar.Brand>

					<div class="ml-5 my-auto input-container">
						<Form inline>
							<FormControl  id="site-search" name="search" class="nav-search-input" aria-label="Search through site content" placeholder="Faça uma pesquisa aqui" type="text" placeholder="Search" className="mr-sm-2" />
							<FontAwesomeIcon icon={faSearch} />
						</Form>
					</div>
				</Col>

				<Col class="header-buttons-container d-flex">
					<div>
						<Button type="button" class="nav-section">
							<FontAwesomeIcon icon={faUser} />
							Cadastro 
						</Button>
					</div>
					
					<div>
						<Button type="button" class="nav-section">
							<FontAwesomeIcon icon={faShoppingCart} />
							Carrinho 
						</Button>
					</div>
				</Col>
			</Navbar>

			<div id="navbar-down" class="navbar-down">
				<select name="dogs" id="dogs" class="navbar-dropdown">
					<option value="all">Cachorros</option>
					<option value="food">Ração</option>
					<option value="toys">Brinquedos</option>
				</select>

				<select name="cats" id="cats" class="navbar-dropdown">
					<option value="all">Gatos</option>
					<option value="food">Ração</option>
					<option value="toys">Brinquedos</option>
					<option value="toys">Areia sanitária</option>
				</select>

				<select name="others" id="others" class="navbar-dropdown">
					<option value="all">Outros pets</option>
					<option value="food">Ração</option>
					<option value="toys">Brinquedos</option>
					<option value="toys">Areia sanitária</option>
				</select>

				<select name="brands" id="brands" class="navbar-dropdown">
					<option value="all">Marcas</option>
				</select>

				<div class="vertical-hr">
				</div>

				<a href="about.html" class="navbar-link">Sobre o Cão Cuidado</a>
				<a href="404.html" class="navbar-link">FAQ</a>
			</div>
		</header>
    </Container>
  );
}
