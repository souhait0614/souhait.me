import ComponentLoading from "./_components/Loading"
import * as styles from "./loading.css"

import BasicPage from "@/app/_components/BasicPage"

const Loading = () => {
  return (
    <BasicPage>
      <ComponentLoading className={styles.loading} />
    </BasicPage>
  )
}

export default Loading
