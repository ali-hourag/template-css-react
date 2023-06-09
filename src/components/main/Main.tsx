import { ActualPage } from "./ActualPage"
import { ImgContainer } from "./ImgContainer"
import { PageChanger } from "./PageChanger"
import "./Main.css"


export const Main = () => {

    return (
        <main className="main">
            <ActualPage />
            <ImgContainer />
            <PageChanger />
        </main>


    )

}