import React, { useEffect } from 'react';

const InfoflotWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://bitrix.infoflot.com/local/templates/infoflot/frontend/js/infoflotIframe.js';
    script.async = true;
    script.onload = () => {
      window.createInfoflotWidget("https://bitrix.infoflot.com/rest/api/search.filter/", {
        key: "YTo0OntzOjI6IklEIjtzOjQ6IjI4MTciO3M6NDoiVVNFUiI7czozMjoiWkdGc2FXNTJaWE4wTWpjd04wQm5iV0ZwYkM1amIyMD0iO3M6NjoiUkFORE9NIjtzOjg6IjEzZWw4NzY5IjtzOjE1OiJJTkZPRkxPVC1BUElLRVkiO3M6NDA6ImUyNWFhNzc1MGIyYmNjNjBhNTY0NWJmZjIyYmVmODJiNGJlYjU4NTUiO30=",
        referer: encodeURIComponent(window.location.href)
      });
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="infoflotWidget" data-id="YTo0OntzOjI6IklEIjtzOjQ6IjI4MTciO3M6NDoiVVNFUiI7czozMjoiWkdGc2FXNTJaWE4wTWpjd04wQm5iV0ZwYkM1amIyMD0iO3M6NjoiUkFORE9NIjtzOjg6IjEzZWw4NzY5IjtzOjE1OiJJTkZPRkxPVC1BUElLRVkiO3M6NDA6ImUyNWFhNzc1MGIyYmNjNjBhNTY0NWJmZjIyYmVmODJiNGJlYjU4NTUiO30=" data-index="1"></div>
  );
};

export default InfoflotWidget;
