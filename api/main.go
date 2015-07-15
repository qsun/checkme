package main

import "log"
import "flag"
import "net/http"

var listenSpec = flag.String("listen", "127.0.0.1:8080", "where should the API endpoint listen")

func catchAllHandler(w http.ResponseWriter, r *http.Request) {
	log.Println("Got request: ", r)
	w.Write([]byte("OK"))
}

func main() {
	flag.Parse()
	log.Printf("Start listening on: %v", *listenSpec)

	http.HandleFunc("/", catchAllHandler)

	log.Fatal(http.ListenAndServe(*listenSpec, nil))
}
