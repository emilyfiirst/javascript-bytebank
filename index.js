import {Cliente} from "./Cliente.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor} from "./Funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Ricardo", 10000, 123456789);
diretor.cadastrarSenha("123456")
const gerente = new Gerente("Alice", 5000, 987654321);
gerente.cadastrarSenha("123");
const cliente = new Cliente("Lais", 789654123, "123");

const gerenteEstalogado = SistemaAutenticacao.login(gerente, "123");
const diretorEstalogado = SistemaAutenticacao.login(diretor, "123456");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "123");

console.log(clienteEstaLogado, diretorEstalogado, gerenteEstalogado);
