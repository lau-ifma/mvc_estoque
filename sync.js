
import Produto from "./models/produto.js";
import Pessoa from "./models/Pessoa.js";
import Usuario from "./models/Usuario.js";
import Venda from "./models/Venda.js";

/*sincronizar com o banco, necessario apenas uma ves*/
await Pessoa.sync()
await Produto.sync()
await Usuario.sync()
await Venda.sync()
