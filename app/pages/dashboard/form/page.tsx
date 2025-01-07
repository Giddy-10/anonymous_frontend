import TextRadio from '@/components/TextRadio/TextRadio'
import React from 'react'
import { GiNinjaHead } from 'react-icons/gi'

const page = () => {
  return (
      <div className="min-h-dvh bg-inherit mt-60 md:mt-32">
          <form className="mx-auto my-10 pt-8 pb-20 px-4 w-96 shadow-2xl rounded-lg">
              <h3 className="text-2xl font-extrabold tracking-tight p-10 pb-2 pl-2 border-b-2 border-base-content transition-colors mb-8">
                  Anonymous <GiNinjaHead className="inline" />
              </h3>
              <p className="block text-2xl tracking-tight my-2">I'm a...</p>
              <TextRadio
                  radioName={"role"}
                  radioValues={["Student", "Lecturer", "Staff"]}
                  required={true}
              />
              <div className="divider"></div>
              <div className="flex flex-col gap-4">
                  <input
                      type="file"
                      multiple
                      accept={
                          ".png,.jpg,.jpeg,.mp4,.mov,.avi,.gif,.mp3,.m4a,.ogg,.txt"
                      }
                      className="file-input file-input-bordered w-full max-w-xs"
                  />
                  <textarea
                      className="textarea textarea-bordered"
                      cols={40}
                      rows={4}
                      placeholder="Write here..."
                  ></textarea>
                  <button className="btn btn-info">Send</button>
              </div>
          </form>
      </div>
  )
}

export default page