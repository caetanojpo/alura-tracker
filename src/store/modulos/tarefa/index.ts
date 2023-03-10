import http from "@/http";
import ITarefa from "@/interfaces/ITarefa";
import { Estado } from "@/store";
import {
  OBTER_TAREFAS,
  CADASTRAR_TAREFA,
  ALTERAR_TAREFA,
} from "@/store/tipo-acoes";
import {
  ADICIONA_TAREFA,
  DEFINIR_TAREFAS,
  ALTERA_TAREFA,
} from "@/store/tipo-mutacoes";
import { Module } from "vuex";

export interface EstadoDaTarefa {
  tarefas: ITarefa[];
}

export const tarefa: Module<EstadoDaTarefa, Estado> = {
  mutations: {
    [ADICIONA_TAREFA](state, tarefa: ITarefa) {
      state.tarefas.push(tarefa);
    },
    [DEFINIR_TAREFAS](state, tarefas: ITarefa[]) {
      state.tarefas = tarefas;
    },
    [ALTERA_TAREFA](state, tarefa: ITarefa) {
      const index = state.tarefas.findIndex((trf) => trf.id == tarefa.id);
      state.tarefas[index] = tarefa;
    },
  },
  actions: {
    [OBTER_TAREFAS]({ commit }) {
      http
        .get("tarefas")
        .then((resposta) => commit(DEFINIR_TAREFAS, resposta.data));
    },
    [CADASTRAR_TAREFA]({ commit }, tarefa: ITarefa) {
      return http
        .post("/tarefas", tarefa)
        .then((resposta) => commit(ADICIONA_TAREFA, resposta.data));
    },
    [ALTERAR_TAREFA]({ commit }, tarefa: ITarefa) {
      return http
        .put(`/tarefas/${tarefa.id}`, tarefa)
        .then(() => commit(ALTERA_TAREFA, tarefa));
    },
  },
};
