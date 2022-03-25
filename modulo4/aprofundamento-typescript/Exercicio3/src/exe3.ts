type PostContrucao = {
    autor: string,
    texto: string
}

const postList: PostContrucao[] = [
    {
        autor: "Alvo Dumbledore",
        texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },

    {
        autor: "Severo Snape",
        texto: "Menos 10 pontos para Grifinória!"
    },

    {
        autor: "Hermione Granger",
        texto: "É levi-ô-sa, não levio-sá!"
    },

    {
        autor: "Dobby",
        texto: "Dobby é um elfo livre!"
    },

    {
        autor: "Lord Voldemort",
        texto: "Avada Kedavra!"
    }]

console.table(postList)

function buscarPostsPorAutor(posts: PostContrucao[], autorInformado: string): any {
    return posts.filter(
      (post) => {
        return post.autor === autorInformado
      }
    )
  }

console.table(buscarPostsPorAutor(postList, "Lord Voldemort"))


