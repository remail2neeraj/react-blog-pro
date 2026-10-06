import React from "react";
import {ContentImage, ContentLink, Quote} from "./Blog.style"
const BlogContent = ({ content }) => {
  return (
    <>
      {content.map((item, index) => (
        <div key={index}>

          {item.type === "heading" && (
            <h2>{item.text}</h2>
          )}

          {item.type === "paragraph" && (
            <p>{item.text}</p>
          )}

          {item.type === "list" && (
            <ul>
              {item.items.map((listItem, index) => (
                <li key={index}>
                  {listItem}
                </li>
              ))}
            </ul>
          )}

          {item.type === "code" && (
            <pre>
              <code>{item.code}</code>
            </pre>
          )}
          {item.type === "quote" && (
            <Quote>{item.text}</Quote>
          )}

          {item.type === "image" && (
            <ContentImage
              src={item.src}
              alt={item.alt}
            />
          )}
          {item.type === "link" && (
            <ContentLink
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.text}
            </ContentLink>
          )}

        </div>
      ))}
    </>
  );
};

export default BlogContent;