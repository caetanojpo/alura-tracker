import { EstadoDaTarefa, tarefa } from "./modulos/tarefa/index";
import { EstadoDoProjeto, projeto } from "./modulos/projeto/index";
import { INotificacao } from "./../interfaces/INotificacao";

import { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore } from "vuex";
import { NOTIFICAR } from "./tipo-mutacoes";
import ITarefa from "@/interfaces/ITarefa";

export interface Estado {
  notificacoes: INotificacao[];
  projeto: EstadoDoProjeto;
  tarefa: EstadoDaTarefa;
}

// Chave de acesso para a store
export const key: InjectionKey<Store<Estado>> = Symbol();

export const store = createStore<Estado>({
  state: {
    notificacoes: [],
    projeto: {
      projetos: [],
    },
    tarefa: {
      tarefas: [],
    },
  },
  mutations: {
    [NOTIFICAR](state, novaNotificacao: INotificacao) {
      novaNotificacao.id = new Date().getTime();
      state.notificacoes.push(novaNotificacao);
      setTimeout(() => {
        state.notificacoes = state.notificacoes.filter(
          (notificacao) => notificacao.id != novaNotificacao.id
        );
      }, 3000);
    },
  },
  //ACTIONS SÃO USADAS PARA API E MUTATIONS PARA ALTERAR O ESTADO
  actions: {},
  modules: {
    projeto,
    tarefa,
  },
});

export function useStore(): Store<Estado> {
  return vuexUseStore(key);
}
