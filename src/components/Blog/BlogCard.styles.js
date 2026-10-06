import styled from "styled-components"

export const  BlogCardWrapper=styled.article`
border:1px solid ${({ theme }) => theme.colors.border};; padding:15px;
border-radius:${({theme})=>theme.radius.md};
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
cursor: pointer;
transition: transform 0.3s ease, box-shadow 0.3s ease;
&:hover {
  transform: translateY(-5px);
}
`
export const BlogContents=styled.div``;

export const BlogImageWrapper=styled.div`
img{
width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
  border-radius:${({theme})=>theme.radius.sm}
  }
`;
export const BlogCategory=styled.div`
color:${({theme})=>theme.colors.primary};
font-weight:300;
margin:8px 0px;
text-decoration:underline;
`;
export const BlogTitle=styled.h2`
font-size:${({ theme }) => theme.fontSize.lg};
`;
export const BlogExcerpt=styled.p`
margin-top:8px;

`;
export const BlogMeta=styled.div`
margin-top:12px;
p:nth-of-type(1) span {
  color: ${({ theme }) => theme.colors.success};
}
`;