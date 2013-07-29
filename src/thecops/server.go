package main

import (
    "fmt"
    "net/http"
)


func main() {
    http.Handle('/administration/github/postcommit', postCommitHook);
    http.HandleFunc('/administration/github/postcommit', func(w http.ResponseWriter, r, *http.Request) {
            fmt.Fprintf(w, "Hello, %q", html.EscapeString(r.URL.Path))
    })
}
