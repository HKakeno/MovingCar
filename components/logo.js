import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'

import styled from '@emotion/styled'

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 10px;
    width: 260px;

    &:hover img {
        transform: scale(1.06);
    }
`
const Logo = () => {
    const myname = `/images/myname.png`
    return (
        <Link href="/">
            <a>
                <LogoBox>
                    <Image src={myname} width={200} height={20} alt="logo"/>
                    <Text
                        color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                        fontFamily="M PLUS Rounded 1c"
                        fontWeight="bold"
                        ml={3}
                    >
                    </Text>
                </LogoBox>
            </a>
        </Link>
    )
}

export default Logo