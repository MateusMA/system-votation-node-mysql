const db = require('../models/db')

async function useVotation() {
    // await db.insertVotation({titulo: 'Escolha o melhor gato', data_inicio: '2022/06/01', data_fim: '2022/07/01', opcao_1: 'Garfield', opcao_2: 'Schrödinger', opcao_3: 'Cheshire'})
    // await db.updateVotation(id, opcao);
    // await db.deleteVotation(1);
      const votos = await db.selectVotation()
      console.log(votos)
}

useVotation()


