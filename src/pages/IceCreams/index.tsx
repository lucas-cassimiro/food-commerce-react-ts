import { Head } from "../../components/Head"

import { SnackTitle } from "../../components/SnackTitle"

import { Snacks } from "../../components/Snacks"

export default function IceCream() {
    const data = [
        {
            id: 1,
            snack: "ice-cream",
            name: "Casquinha",
            description: "A casquinha crocante e saborosa que nossos cliente amam.",
            price: 4.5,
            image: "https://i.imgur.com/YGmeoCm.jpg"
        },
        {
            id: 2,
            snack: "ice-cream",
            name: "Chocolate com granulado",
            description: "Sorvete de chocolate com granulados em chocolate para você se deliciar.",
            price: 6,
            image: "https://i.imgur.com/osAHOLe.jpg"
        },
        {
            id: 3,
            snack: "ice-cream",
            name: "Flocos",
            description: "O tradicional flocos vem com cobertura em chocolate para adocicar seu dia.",
            price: 7,
            image: "https://i.imgur.com/qgnFLiy.jpg"
        },
        {
            id: 4,
            snack: "ice-cream",
            name: "Creme",
            description: "O simples sorvete de creme com um gosto irresistível.",
            price: 6.5,
            image: "https://i.imgur.com/dFLysrT.jpg"
          },
          {
            id: 5,
            snack: "ice-cream",
            name: "Morango",
            description: "O clássico sorvete de morango que deixe tudo mais leve.",
            price: 10,
            image: "https://i.imgur.com/0TWnEI7.jpg"
          }
    ]

    return (
        <>
            <Head title="Sorvetes" description="Nossos melhores sorvetes"/>
            <SnackTitle>Sorvetes</SnackTitle>
            <Snacks snacks={data}></Snacks>
        </>
    )
}