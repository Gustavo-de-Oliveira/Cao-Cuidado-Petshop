import React from 'react';
import NextLink from 'next/link';
//import headerIcon from '../../src/images/Logo_white.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faYoutube,
  faAmazonPay,
  faCcMastercard,
  faCcVisa,
  faCcPaypal,
  faCcAmex,
} from '@fortawesome/free-brands-svg-icons';
import { faWallet } from '@fortawesome/free-solid-svg-icons';

import {
  Container,
  Image,
  Col,
  Row,
  Nav,
  Navbar,
  Form,
  FormControl,
  Button,
  InputGroup,
} from 'react-bootstrap';

export default function Header() {
  return (
    <footer className="text-center mt-5 col-12">
      <div className="">
        <section className="bg-danger p-4 mx-auto col-lg-10 col-md-12 rounded">
          <form action="">
            <div className="row d-flex justify-content-center">
              <div className="col-auto">
                <p className="">
                  Deseja receber promoções e novidades exclusivas?
                  <br />
                  Registre seu email!!
                </p>
              </div>

              <div className="col-md-5 col-12 mt-2">
                <div className="form-outline form-white mb-4">
                  <input
                    type="email"
                    id="form5Example2"
                    className="form-control"
                  />
                </div>
              </div>

              <div className="col-auto mt-2">
                <button type="submit" className="btn btn-outline-primary mb-4">
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </section>

        <section className="bg-dark col-12 mt-4">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <img
                src="../../../public/Logo_white.png"
                className=""
                width="250px"
                height="250px"
              />
            </div>

            <div className="col-lg-2 col-md-6 mb-4 mt-3 mb-md-0">
              <h5 className="text-uppercase">Sobre</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">
                    Sobre a Cão Cuidado PetShop
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Nossas lojas
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Trabalhe conosco
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Projetos sociais
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-6 mb-4 mt-3 mb-md-0">
              <h5 className="text-uppercase">Atendimento</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">
                    Central de atendimento
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Assessoria de imprensa
                  </a>
                </li>
              </ul>

              <h5 className="text-uppercase mt-4">Atendimento</h5>

              <ul className="list-inline">
                <li className="list-inline-item">
                  <a href="#!" className="text-white list-inline-item">
                    <FontAwesomeIcon
                      width="20px"
                      height="20px"
                      icon={faTwitter}
                    />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#!" className="text-white list-inline-item">
                    <FontAwesomeIcon
                      width="20px"
                      height="20px"
                      icon={faFacebook}
                    />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#!" className="text-white list-inline-item">
                    <FontAwesomeIcon
                      width="20px"
                      height="20px"
                      icon={faInstagram}
                    />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#!" className="text-white list-inline-item">
                    <FontAwesomeIcon
                      width="20px"
                      height="20px"
                      icon={faYoutube}
                    />
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-6 mb-4 mt-3 mb-md-0">
              <h5 className="text-uppercase">Políticas</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">
                    Política de privacidade
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Política de entrega e devolução
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Política de white hat
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mt-3 mb-md-0">
              <h5 className="text-uppercase">Formas de pagamento</h5>

              <ul className="list-inline">
                <li className="list-inline-item p-1">
                  <FontAwesomeIcon width="20px" height="20px" icon={faCcAmex} />
                </li>
                <li className="list-inline-item p-1">
                  <FontAwesomeIcon width="20px" height="20px" icon={faCcVisa} />
                </li>
                <li className="list-inline-item p-1">
                  <FontAwesomeIcon
                    width="20px"
                    height="20px"
                    icon={faCcMastercard}
                  />
                </li>
                <li className="list-inline-item p-1">
                  <FontAwesomeIcon
                    width="20px"
                    height="20px"
                    icon={faCcPaypal}
                  />
                </li>
                <li className="list-inline-item p-1">
                  <FontAwesomeIcon
                    width="20px"
                    height="20px"
                    icon={faAmazonPay}
                  />
                </li>
                <li className="list-inline-item p-1">
                  <FontAwesomeIcon width="20px" height="20px" icon={faWallet} />
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}

/*
TODO:
	Ajustes de layout específicos com css
	descobrir como add imagem
*/
