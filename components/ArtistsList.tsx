import { useEffect, useState } from "react"
import styled from "styled-components"
import { useApi } from "../hooks/custom/useApi"
import { FaWhatsapp, FaChevronLeft } from 'react-icons/fa'
import { TitlePage } from "./ui"
const ArtistList = styled.ul`
    @media(max-width: 768px) {
        width: 100% !important;
    }
    width: 50%;
`
const ArtistItem = styled.li`
    box-shadow: 0 0 3px #ccc;
    margin: 10px;
    border-radius; 5px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    position: relative;
    &:hover { 
        transition: 1s;
        background: #ebebeb;
    }

`
const ArtistInfo = styled.span`
    font-weight: 400;
    margin: 5px 0;
`
const Whats = styled.a`
    position: absolute;
    right: 25px;
    svg:hover {
        transform: scale(1.4);
        transition: 1s;
    }

`
const ChevronBack = styled.a`
    margin: 25px !important;
    top: 15px;
    position: relative;
    padding: 25px;
    color: #ebebeb;
    &:hover {
        color: #000;
        transition: 1s;
    }
`

export const Artists = () => {
    const api = useApi()
    const [artists, setArtists] = useState<string[]>()
    const baseWhats = 'https://web.whatsapp.com/send?phone='

    useEffect(() => {
        const setInArtists = async () => {
            const res = await api.getArtist()
            if(res){
                 setArtists(res)
            }
        }
        setInArtists()
    } , [useApi])



    return (
        <>
            <ArtistList>
                <ChevronBack href="/">
                    <FaChevronLeft size={25}/>
                </ChevronBack>
                <TitlePage title={'Lista de Tatuadores'} center={true}/>
                    
                {artists && artists.map((artist: any, i:number) => {
                    return (
                        <ArtistItem key={`ArtistListItem${artist.name}`}>
                            <ArtistInfo key={`containerIfo${artist.name}`}>
                                <span style={{fontWeight: 'bold'}} key={`name${artist.name}`}> Name: </span> { artist.name}
                            </ArtistInfo> 
                            <ArtistInfo>
                                <span style={{fontWeight: 'bold'}}  key={`endereco${artist.name}`}> Endereço: </span> { artist.address.street}, CEP: {artist.address.zipcode}
                            </ArtistInfo> 
                            <Whats  
                                key={`WhatsContainer${artist.name}`}
                                title={`Chamar ${artist.name} no WhatsApp`} 
                                href={baseWhats + artist.phone} 
                                target="_blank">
                                <FaWhatsapp color="green" size={25} key={`Whats${artist.name}`}/>
                            </Whats>
                        </ArtistItem>
                        
                    )   
                })}
            </ArtistList>
        </>
        
    )
}