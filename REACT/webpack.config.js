const path = require("path"); // Módulo do Node para lidar com caminhos
const HtmlWebpackPlugin = require("html-webpack-plugin"); // Plugin que injeta o JS no HTML automaticamente

module.exports = {
  entry: "./src/index.js", // Arquivo inicial do app
  output: {
    path: path.resolve(__dirname, "dist"), // Pasta onde os arquivos finais serão salvos
    filename: "bundle.js", // Nome do arquivo JS gerado
    clean: true // Limpa a pasta dist antes de cada build
  },
  mode: "development", // Modo inicial (pode ser 'production' para otimizar)
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Aplica a regra para arquivos JS e JSX
        exclude: /node_modules/, // Ignora dependências externas
        use: "babel-loader" // Usa o Babel para transpilar
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"] // Permite importar arquivos sem precisar digitar a extensão
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html" // HTML base para injetar o React
    })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "public") // Servir arquivos estáticos
    },
    compress: true, // Ativa compressão gzip
    port: 3000, // Porta do servidor
    open: true, // Abre o navegador automaticamente
    hot: true // Atualização automática sem recarregar a página
  }
};
