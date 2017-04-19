import React, {Component} from 'react';

const headerStyle = {}
const pStyle = {}
const hrStyle = {}

export default class Education extends Component {
    render() {
        return (
          <div className="row">
            <div className="main-text col-xs-6">
              <h2>VIA University College</h2>
              <p>
                  Kansainvälinen opiskelijavaihto<br />
                  ICT Engineering<br />
                  08/2016 - 12/2016<br />

              </p>
            </div>
            <div className="main-text-list col-xs-6">
                <ul>
                  <li>
                    <ul>
                    <li>
                      Single-page Web Applications
                    </li>
                    <li>
                      Advanced .NET Programming
                    </li>
                    <li>
                      Linux Server Administration and Open Source
                    </li>
                    <li>
                      ERP Systems SAP ABAP/4 Programming
                    </li>
                    <li>
                      Database Internals and Tuning (Oracle)
                    </li>
                    <li>
                      Lego Robot Lab
                    </li>
                    </ul>
                  </li>


                </ul>

            </div>
            <div className="main-text">
                <br />
                <hr/>
                <br />
            </div>
            <div className="main-text">
                <h2>Hämeen ammattikorkeakoulu</h2>
                <p>
                    Tieto- ja viestintätekniikan insinööri<br />
                    2014 - (2018)<br />
                </p>
            </div>
            <div className="main-text-list">
                <ul>
                    <li> Ohjelmointi
                        <ul>
                            <li>
                                Ohjelmoinnin perusteet (Javascript)
                            </li>
                            <li>
                                Olio-ohjelmointi (Java)
                            </li>
                            <li>
                                Kuvauskielten perusteet (HTML/CSS)
                            </li>
                            <li>
                                Tietokantojen suunnittelu ja ohjelmointi (MS Access, MySQL)
                            </li>
                            <li>
                                Asiakas- ja palvelinpuolen web-ohjelmointi (LAMP, Javascript)
                            </li>
                            <li>
                                Grafiikkaohjelmointi
                            </li>
                            <li>
                                Käyttöliittymäohjelmointi (C#)
                            </li>
                        </ul>
                        <br />
                    </li>

                    <li> Tietojärjestelmät
                        <ul>
                            <li>
                                Tietoverkkojen perusteet (Cisco CCNA1)
                            </li>
                            <li>
                                Reititin- ja kytkinverkot (Cisco CCNA2)
                            </li>
                            <li>
                                Linux-/Unix-hallinnointi
                            </li>
                            <li>
                                Skaalautuvat verkot
                            </li>
                            <li>
                                Hallintasovellukset
                            </li>
                            <li>
                                Analysointi ja monitorointi
                            </li>
                            <li>
                                Digitaalielektroniikka ja sulautetut järjestelmät
                            </li>
                            <li>
                                Elektroniikka
                            </li>
                            <li>
                                Mittaustekniikan perusteet<br />
                            </li>
                        </ul>
                        <br />
                    </li>

                    <li> Yleissivistävät aineet
                        <ul>
                            <li>
                                Matematiikka
                            </li>

                            <li>
                                Mekaniikka
                            </li>
                            <li>
                                Sähkö ja magnetismi
                            </li>
                            <li>
                                Viestintä
                            </li>
                            <li>
                                Ruotsi
                            </li>
                            <li>
                                Englanti
                            </li>

                        </ul>
                    </li>
                </ul>

            </div>
            <div className="main-text">
                <br />
                <hr/>
                <br />
            </div>
            <div className="main-text">
                <h2>Hyria koulutus Oy</h2>
                <p>
                    Tieto- ja tietoliikennetekniikan perustutkinto<br />
                    2009 - 2012<br />
                </p>
            </div>
            <div className="main-text-list">
                <ul>
                    <li> Elektroniikan ja ICT:n perustehtävät
                        <ul>
                            <li>
                                Sähkötekniikan peruskytkentöjen mittaus
                            </li>

                        </ul>
                        <br />
                    </li>

                    <li> Tietokone- ja tietoliikenneasennukset
                        <ul>
                            <li>
                                Asiakaskoneen asennus ja konfigurointi
                            </li>

                        </ul>
                        <br />
                    </li>

                    <li> Palvelinjärjestelmät ja projektityöt
                        <ul>
                            <li>
                                Pienyrityksen tietoverkon asennus ja konfigurointi
                            </li>

                        </ul>
                        <br />
                    </li>

                    <li> Tietokonehuolto
                        <ul>
                            <li>
                                Työasemien ja tulostimien asennus ja verkkoon liittäminen
                            </li>

                        </ul>
                        <br />
                    </li>


                    <li> Järjestelmäasennukset
                        <ul>
                            <li>
                                Viestilaitekehikon kokoonpano
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="main-text">
                <br />
                <hr />
                <br />
            </div>
            <div className="main-text">
                <h2>Varusmieskoulutus</h2>
            </div>
            <div className="main-text-list">
                <ul>
                    <li>
                        Aliupseerikoulutus (tietojärjestelmäasentaja)
                    </li>
                </ul>
            </div>
        </div>
        );
    }
}
