<?
require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/header.php");
$APPLICATION->SetTitle("База данных сертификатов");
?>
    <link href="styles.css" rel="stylesheet">
    <div class="alert alert-info" role="alert">
           <strong> Внимание!</strong> Доступ ограничен. Сервис работает в тестовом режиме.
    </div>

    <div  id="app">
        <h1>База данных сертификатов</h1>
        <section v-if="errored">
            <p>К сожалению, в настоящее время мы не можем получить эту информацию, повторите попытку позже.</p>
        </section>
        <section v-else>
            <div v-if="loading">Loading...</div>
            <div class="row">
                <div class="col-md-10">
                    <div class="form-group">
                        <label for="search">Поиск сертификата</label>
                        <input
                            type="text"
                            class="form-control"
                            id="search"
                            placeholder="Наименование, артикул ..."
                            v-model="search"
                        >
                    </div>
                    <hr>


                    <ul class="list-group">
                        <li
                            v-for="(crt, i) in filterCrtsRegisterNot"
                            class="list-group-item list-group-item-action pointer"
                            @click="selectCrt(i)"
                            :class="{'active': selectedCrtIndex===i}"
                        >
                            <a :href="crt.file" title="Скачать">  <strong>{{crt.code}}</strong> - {{crt.name }}</a>
                        </li>
                    </ul>
                </div>
          <!--      <div class="col-md-8">
                    <div class="row">
                        <div class="col-md-8">
                            <h3>{{crt.name}}</h3>
                            <h5>Сертификат</h5>
                            <ul>
                                <li>Артикул - <strong>{{crt.code}}</strong></li>
                                <li>Наименование - <strong>{{crt.name}}</strong></li>
                            </ul>
                            <div class="btn-group btn-group-justified" role="group" aria-label="...">
                                <div class="btn-group" role="group">
                                    <button @click="modalVisibility=true" class="btn btn-danger btn-lg">
                                        <span class="glyphicon glyphicon-compressed" aria-hidden="true"></span>
                                        ZIP
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>-->
            </div>
            <!--  <div class="row" v-if="logs.length !== 0">
                  <div class="col-md-8">
                      <ul class="list-group">
                          <li
                              v-for="log in logs"
                              class="list-group-item"
                              :class="{
                              'list-group-item-secondary':log.type==='cnl',
                              'list-group-item-success':log.type==='ok'
                              }">
                              {{log.text}} {{log.date | date}}
                          </li>
                      </ul>
                  </div>
              </div>

              <transition name="modal">
                  <div class="modal fade-vue show" id="vue" v-if="modalVisibility" tabindex="-1" role="dialog">
                      <div class="modal-dialog" role="document">
                          <div class="modal-content">
                              <div class="modal-header">
                                  <h5 class="modal-title">Вы хотите скачать архив ZIP?</h5>
                                  <button type="button"
                                          class="close"
                                          data-dismiss="modal"
                                          aria-label="Close"
                                          @click="modalVisibility = false"
                                  >
                                      <span aria-hidden="true">&times;</span>
                                  </button>
                              </div>
                              <div class="modal-body">
                                  <p><strong>{{crt.name}}</strong></p>
                                  <ul>
                                      <li>Артикул - <strong>{{crt.code}}</strong></li>
                                      <li>Наименование - <strong>{{crt.name}}</strong></li>
                                    <li>Нотификатция - <strong>{{crt.notification}}</strong></li>
                                  </ul>
                              </div>
                              <div class="modal-footer">

                                  <button
                                      type="button"
                                      class="btn btn-secondary float-left"
                                      data-dismiss="modal"
                                      @click="downloadCancel"
                                  >
                                      Нет
                                  </button>
                                  <button
                                      type="button"
                                      class="btn btn-primary float-right"
                                      @click="downloadZIP"
                                  >
                                      Да
                                  </button>
                              </div>
                          </div>
                      </div>
                  </div>
              </transition>
              <transition name="fade-vue">
                  <div class="modal-backdrop fade-vue show" v-if="modalVisibility"></div>
              </transition>-->
        </section>
    </div>


    <script type="text/javascript" src="js/2.5.21vue.js"></script>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script type="text/javascript" src="js/app.js"></script>


<? require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/footer.php"); ?>