// thac mac 1
'use client'

import { Provider as ReduxProvider } from 'react-redux'
import { FC, ReactNode } from 'react'
import { ConfigProvider } from 'antd'
import theme from '@/theme/theme-config'
import StyledComponentsRegistry from '@/theme/ant-registry'
import { useStore } from '@/stores'
import { AntdRegistry } from '@ant-design/nextjs-registry'
interface ProvidersProps {
    children: ReactNode
}
const GlobalProvider: FC<ProvidersProps> = ({ children }) => {
    // init state
    const store = useStore(undefined)
    return (
        <ReduxProvider store={store}>
            <ConfigProvider theme={theme}>
                {/* <StyledComponentsRegistry>{children}</StyledComponentsRegistry> */}
                <AntdRegistry>{children}</AntdRegistry>
            </ConfigProvider>
        </ReduxProvider>
    )
}

export default GlobalProvider
