import React from 'react';
import NextImage from 'next/image';
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
import { faWallet, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import brandIcon from '../../../public/Logo_white.png';
import styles from './styles.module.css';
import Link from '../Link';

export default function Footer() {
  return (
    <footer className={`${styles.footerContainer}`}>
      <div>
        <section
          className={`mt-5 p-4 mx-auto col-lg-10 col-md-12 ${styles.newsletterSection}`}
        >
          <form action="">
            <div className="row d-flex justify-content-center">
              <div className="col-auto">
                <p className="mt-3">
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
                    className={`form-control mt-2 ${styles.inputEmail}`}
                  />
                </div>
              </div>

              <div className="col-auto mt-2">
                <button
                  type="submit"
                  className={`btn mt-3 mb-4 ${styles.sendBtn}`}
                >
                  Enviar{' '}
                  <FontAwesomeIcon
                    width="20px"
                    height="20px"
                    icon={faArrowUp}
                  />
                </button>
              </div>
            </div>
          </form>
        </section>

        <section className={`col-12 mt-4 ${styles.footerSection}`}>
          <div className={`row ${styles.listStyle}`}>
            <div className="col-lg-3 col-md-6">
              <Link href="/">
                <NextImage src={brandIcon} alt="logo" />
                {/* <img src={brandIcon.src} alt="logo" /> */}
              </Link>
            </div>

            <div className="col-lg-2 col-md-6 mb-4 mt-3 mb-md-0">
              <h5 className="text-uppercase">Sobre</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="">
                    Sobre a Cão Cuidado PetShop
                  </a>
                </li>
                <li>
                  <a href="#!" className="">
                    Nossas lojas
                  </a>
                </li>
                <li>
                  <a href="#!" className="">
                    Trabalhe conosco
                  </a>
                </li>
                <li>
                  <a href="#!" className="">
                    Projetos sociais
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-6 mb-4 mt-3 mb-md-0">
              <h5 className="text-uppercase">Atendimento</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="">
                    Central de atendimento
                  </a>
                </li>
                <li>
                  <a href="#!" className="">
                    Assessoria de imprensa
                  </a>
                </li>
              </ul>

              <h5 className="text-uppercase mt-4">Atendimento</h5>

              <ul className="list-inline">
                <li className="list-inline-item">
                  <a href="#!" className=" list-inline-item">
                    <FontAwesomeIcon
                      width="20px"
                      height="20px"
                      icon={faTwitter}
                    />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#!" className=" list-inline-item">
                    <FontAwesomeIcon
                      width="20px"
                      height="20px"
                      icon={faFacebook}
                    />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#!" className=" list-inline-item">
                    <FontAwesomeIcon
                      width="20px"
                      height="20px"
                      icon={faInstagram}
                    />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#!" className=" list-inline-item">
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
                  <a href="#!" className="">
                    Política de privacidade
                  </a>
                </li>
                <li>
                  <a href="#!" className="">
                    Política de entrega e devolução
                  </a>
                </li>
                <li>
                  <a href="#!" className="">
                    Política de white hat
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mt-3 mb-md-0">
              <h5 className="text-uppercase">Formas de pagamento</h5>

              <ul className="list-inline ">
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
