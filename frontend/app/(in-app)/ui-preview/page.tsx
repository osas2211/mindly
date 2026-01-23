"use client"
import React, { useState } from "react"
import { Button } from "@/components/shared/ui/Button"
import { SearchInput } from "@/components/shared/ui/SearchInput"
import { Input } from "@/components/shared/ui/Input"
import { Textarea } from "@/components/shared/ui/Textarea"
import { Select } from "@/components/shared/ui/Select"
import { Checkbox } from "@/components/shared/ui/Checkbox"
import { Radio, Toggle, Modal, Card, Avatar, Badge, IconButton, Spinner, Tooltip } from "@/components/shared/ui"
import { BiHeart, BiEdit, BiTrash, BiPlus, BiSearch, BiShare } from "react-icons/bi"

export default function UIPreviewPage() {
  const [searchValue, setSearchValue] = useState("")
  const [toggleChecked, setToggleChecked] = useState(false)
  const [modalSmallOpen, setModalSmallOpen] = useState(false)
  const [modalMediumOpen, setModalMediumOpen] = useState(false)
  const [modalLargeOpen, setModalLargeOpen] = useState(false)
  const [modalWithFooterOpen, setModalWithFooterOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <div>
          <h1 className="text-4xl font-bold text-black mb-2">
            UI Component Library
          </h1>
          <p className="text-grey-500">
            Preview of all available UI components in the Mindly design system
          </p>
        </div>

        {/* Button Component */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-black mb-4">Buttons</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-black mb-3">
                  Variants
                </h3>
                <div className="flex flex-wrap gap-3">
                  <Button>Default</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="text">Text</Button>
                  <Button variant="danger">Danger</Button>
                  <Button disabled>Disabled</Button>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-black mb-3">Sizes</h3>
                <div className="flex flex-wrap items-center gap-3">
                  <Button size="sm">Small</Button>
                  <Button size="md">Medium</Button>
                  <Button size="lg">Large</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* IconButton Component */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-black mb-4">Icon Buttons</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-black mb-3">
                  Variants
                </h3>
                <div className="flex flex-wrap gap-3">
                  <IconButton>
                    <BiHeart />
                  </IconButton>
                  <IconButton variant="outline">
                    <BiEdit />
                  </IconButton>
                  <IconButton variant="text">
                    <BiShare />
                  </IconButton>
                  <IconButton variant="danger">
                    <BiTrash />
                  </IconButton>
                  <IconButton disabled>
                    <BiPlus />
                  </IconButton>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-black mb-3">Sizes</h3>
                <div className="flex flex-wrap items-center gap-3">
                  <IconButton size="sm">
                    <BiSearch />
                  </IconButton>
                  <IconButton size="md">
                    <BiSearch />
                  </IconButton>
                  <IconButton size="lg">
                    <BiSearch />
                  </IconButton>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-black mb-3">Shapes</h3>
                <div className="flex flex-wrap items-center gap-3">
                  <IconButton shape="circle">
                    <BiPlus />
                  </IconButton>
                  <IconButton shape="rounded">
                    <BiPlus />
                  </IconButton>
                  <IconButton shape="circle" variant="outline">
                    <BiEdit />
                  </IconButton>
                  <IconButton shape="rounded" variant="outline">
                    <BiEdit />
                  </IconButton>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-black mb-3">
                  Use Cases
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-grey-500 mb-2">
                      Action Buttons
                    </p>
                    <div className="flex gap-2">
                      <IconButton variant="outline" size="sm">
                        <BiEdit />
                      </IconButton>
                      <IconButton variant="danger" size="sm">
                        <BiTrash />
                      </IconButton>
                      <IconButton variant="text" size="sm">
                        <BiShare />
                      </IconButton>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-grey-500 mb-2">
                      Floating Action Button
                    </p>
                    <IconButton size="lg" shape="circle">
                      <BiPlus />
                    </IconButton>
                  </div>
                  <div>
                    <p className="text-sm text-grey-500 mb-2">With Cards</p>
                    <Card
                      title="Project Card"
                      subtitle="Click icons to interact"
                      padding="sm"
                    >
                      <div className="flex items-center justify-between mt-2">
                        <p className="text-sm text-grey-500">
                          Quick actions for this item
                        </p>
                        <div className="flex gap-1">
                          <IconButton variant="text" size="sm">
                            <BiHeart />
                          </IconButton>
                          <IconButton variant="text" size="sm">
                            <BiEdit />
                          </IconButton>
                          <IconButton variant="text" size="sm">
                            <BiTrash />
                          </IconButton>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SearchInput Component */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-black mb-4">Search Input</h2>
          <div className="space-y-4 max-w-md">
            <SearchInput
              placeholder="Search with left icon..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <SearchInput
              placeholder="Search with right icon..."
              iconPosition="right"
            />
            <div className="space-y-2">
              <p className="text-sm font-medium text-black">Sizes</p>
              <SearchInput size="sm" placeholder="Small search" />
              <SearchInput size="md" placeholder="Medium search" />
              <SearchInput size="lg" placeholder="Large search" />
            </div>
          </div>
        </section>

        {/* Input Component */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-black mb-4">Input</h2>
          <div className="space-y-4 max-w-md">
            <Input label="Email" type="email" placeholder="Enter your email" />
            <Input
              label="Password"
              type="password"
              placeholder="Enter password"
            />
            <Input
              label="With Error"
              placeholder="Username"
              error="This field is required"
            />
            <div className="space-y-2">
              <p className="text-sm font-medium text-black">Sizes</p>
              <Input label="Small" size="sm" placeholder="Small input" />
              <Input label="Medium" size="md" placeholder="Medium input" />
              <Input label="Large" size="lg" placeholder="Large input" />
            </div>
          </div>
        </section>

        {/* Textarea Component */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-black mb-4">Textarea</h2>
          <div className="space-y-4 max-w-md">
            <Textarea
              label="Description"
              placeholder="Enter a description..."
            />
            <Textarea
              label="With Error"
              placeholder="Your message"
              error="Message is too short"
            />
            <div className="space-y-2">
              <p className="text-sm font-medium text-black">Sizes</p>
              <Textarea label="Small" size="sm" placeholder="Small textarea" />
              <Textarea
                label="Medium"
                size="md"
                placeholder="Medium textarea"
              />
              <Textarea label="Large" size="lg" placeholder="Large textarea" />
            </div>
          </div>
        </section>

        {/* Select Component */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-black mb-4">Select</h2>
          <div className="space-y-4 max-w-md">
            <Select label="Country">
              <option value="">Select a country</option>
              <option value="us">United States</option>
              <option value="uk">United Kingdom</option>
              <option value="ca">Canada</option>
            </Select>
            <Select label="Priority" error="Priority is required">
              <option value="">Choose priority</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </Select>
            <div className="space-y-2">
              <p className="text-sm font-medium text-black">Sizes</p>
              <Select label="Small" size="sm">
                <option>Option 1</option>
                <option>Option 2</option>
              </Select>
              <Select label="Medium" size="md">
                <option>Option 1</option>
                <option>Option 2</option>
              </Select>
              <Select label="Large" size="lg">
                <option>Option 1</option>
                <option>Option 2</option>
              </Select>
            </div>
          </div>
        </section>

        {/* Checkbox Component */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-black mb-4">Checkbox</h2>
          <div className="space-y-4 max-w-md">
            <Checkbox label="I agree to the terms and conditions" />
            <Checkbox label="Subscribe to newsletter" defaultChecked />
            <Checkbox label="With Error" error="You must accept to continue" />
            <div className="space-y-2">
              <p className="text-sm font-medium text-black">Sizes</p>
              <Checkbox label="Small checkbox" size="sm" />
              <Checkbox label="Medium checkbox" size="md" />
              <Checkbox label="Large checkbox" size="lg" />
            </div>
          </div>
        </section>

        {/* Radio Component */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-black mb-4">Radio</h2>
          <div className="space-y-4 max-w-md">
            <div className="space-y-2">
              <p className="text-sm font-medium text-black">Choose an option</p>
              <Radio label="Option 1" name="option" value="1" defaultChecked />
              <Radio label="Option 2" name="option" value="2" />
              <Radio label="Option 3" name="option" value="3" />
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium text-black">Sizes</p>
              <Radio label="Small radio" size="sm" name="size" value="sm" />
              <Radio
                label="Medium radio"
                size="md"
                name="size"
                value="md"
                defaultChecked
              />
              <Radio label="Large radio" size="lg" name="size" value="lg" />
            </div>
          </div>
        </section>

        {/* Toggle Component */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-black mb-4">Toggle</h2>
          <div className="space-y-4 max-w-md">
            <Toggle
              label="Enable notifications"
              checked={toggleChecked}
              onChange={(e) => setToggleChecked(e.target.checked)}
            />
            <Toggle label="Dark mode" defaultChecked />
            <Toggle label="With Error" error="This option is required" />
            <div className="space-y-2">
              <p className="text-sm font-medium text-black">Sizes</p>
              <Toggle label="Small toggle" size="sm" />
              <Toggle label="Medium toggle" size="md" />
              <Toggle label="Large toggle" size="lg" />
            </div>
          </div>
        </section>

        {/* Modal Component */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-black mb-4">Modal</h2>
          <div className="space-y-4 max-w-md">
            <div className="space-y-2">
              <p className="text-sm font-medium text-black">Sizes</p>
              <div className="flex flex-wrap gap-3">
                <Button onClick={() => setModalSmallOpen(true)}>
                  Small Modal
                </Button>
                <Button onClick={() => setModalMediumOpen(true)}>
                  Medium Modal
                </Button>
                <Button onClick={() => setModalLargeOpen(true)}>
                  Large Modal
                </Button>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium text-black">With Footer</p>
              <Button onClick={() => setModalWithFooterOpen(true)}>
                Open Modal with Footer
              </Button>
            </div>
          </div>

          {/* Small Modal */}
          <Modal
            isOpen={modalSmallOpen}
            onClose={() => setModalSmallOpen(false)}
            title="Small Modal"
            size="sm"
          >
            <p className="text-grey-500">
              This is a small modal. It&apos;s perfect for simple confirmations
              or short messages.
            </p>
          </Modal>

          {/* Medium Modal */}
          <Modal
            isOpen={modalMediumOpen}
            onClose={() => setModalMediumOpen(false)}
            title="Medium Modal"
            size="md"
          >
            <div className="space-y-4">
              <p className="text-grey-500">
                This is a medium modal with more content. It can contain forms,
                images, or any other content you need.
              </p>
              <Input label="Name" placeholder="Enter your name" />
              <Input
                label="Email"
                type="email"
                placeholder="Enter your email"
              />
            </div>
          </Modal>

          {/* Large Modal */}
          <Modal
            isOpen={modalLargeOpen}
            onClose={() => setModalLargeOpen(false)}
            title="Large Modal"
            size="lg"
          >
            <div className="space-y-4">
              <p className="text-grey-500">
                This is a large modal that can accommodate extensive content,
                complex forms, or detailed information.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <Input label="First Name" placeholder="John" />
                <Input label="Last Name" placeholder="Doe" />
                <Input
                  label="Email"
                  type="email"
                  placeholder="john@example.com"
                />
                <Input
                  label="Phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
              <Textarea
                label="Message"
                placeholder="Write your message here..."
              />
            </div>
          </Modal>

          {/* Modal with Footer */}
          <Modal
            isOpen={modalWithFooterOpen}
            onClose={() => setModalWithFooterOpen(false)}
            title="Confirm Action"
            footer={
              <>
                <Button
                  variant="text"
                  onClick={() => setModalWithFooterOpen(false)}
                >
                  Cancel
                </Button>
                <Button onClick={() => setModalWithFooterOpen(false)}>
                  Confirm
                </Button>
              </>
            }
          >
            <p className="text-grey-500">
              Are you sure you want to perform this action? This action cannot
              be undone.
            </p>
          </Modal>
        </section>

        {/* Card Component */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-black mb-4">Card</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">Variants</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card title="Default Card" subtitle="Standard card style">
                  <p className="text-grey-500">
                    This is a default card with a border and subtle background.
                  </p>
                </Card>
                <Card
                  title="Outlined Card"
                  subtitle="Thicker border"
                  variant="outlined"
                >
                  <p className="text-grey-500">
                    This card has a more prominent outline with a thicker border.
                  </p>
                </Card>
                <Card
                  title="Elevated Card"
                  subtitle="With shadow"
                  variant="elevated"
                >
                  <p className="text-grey-500">
                    This card appears elevated with a shadow effect.
                  </p>
                </Card>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-black mb-3">
                Padding Sizes
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card title="Small Padding" padding="sm">
                  <p className="text-grey-500">
                    Card with small padding for compact layouts.
                  </p>
                </Card>
                <Card title="Large Padding" padding="lg">
                  <p className="text-grey-500">
                    Card with large padding for spacious layouts.
                  </p>
                </Card>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-black mb-3">
                With Footer
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card
                  title="User Profile"
                  subtitle="Complete your profile information"
                  footer={
                    <div className="flex gap-2 justify-end">
                      <Button variant="text" size="sm">
                        Cancel
                      </Button>
                      <Button size="sm">Save</Button>
                    </div>
                  }
                >
                  <div className="space-y-3">
                    <Input label="Name" placeholder="John Doe" size="sm" />
                    <Input
                      label="Email"
                      type="email"
                      placeholder="john@example.com"
                      size="sm"
                    />
                  </div>
                </Card>
                <Card
                  title="Statistics"
                  subtitle="Your activity this week"
                  variant="elevated"
                  footer={
                    <p className="text-sm text-grey-400">
                      Updated 5 minutes ago
                    </p>
                  }
                >
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-grey-600">Tasks Completed</span>
                      <span className="font-bold text-mindly-purple">24</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-grey-600">Hours Tracked</span>
                      <span className="font-bold text-mindly-purple">18.5</span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-black mb-3">
                Hoverable Cards
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card title="Project Alpha" hoverable variant="elevated">
                  <p className="text-grey-500 text-sm">
                    Click to view project details and progress.
                  </p>
                </Card>
                <Card title="Project Beta" hoverable variant="elevated">
                  <p className="text-grey-500 text-sm">
                    Click to view project details and progress.
                  </p>
                </Card>
                <Card title="Project Gamma" hoverable variant="elevated">
                  <p className="text-grey-500 text-sm">
                    Click to view project details and progress.
                  </p>
                </Card>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-black mb-3">
                No Padding (Custom Content)
              </h3>
              <Card padding="none" variant="elevated">
                <div className="relative h-40 bg-gradient-to-br from-mindly-purple to-soft-periwinkle rounded-t-xl" />
                <div className="p-6">
                  <h4 className="text-lg font-bold text-black mb-2">
                    Featured Content
                  </h4>
                  <p className="text-grey-500 text-sm">
                    Use padding=&quot;none&quot; for full control over spacing
                    and custom layouts.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Avatar Component */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-black mb-4">Avatar</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">Sizes</h3>
              <div className="flex items-center gap-4">
                <Avatar size="sm" initials="JD" />
                <Avatar size="md" initials="JD" />
                <Avatar size="lg" initials="JD" />
                <Avatar size="xl" initials="JD" />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-black mb-3">
                With Initials
              </h3>
              <div className="flex items-center gap-4">
                <Avatar initials="AB" />
                <Avatar initials="CD" size="lg" />
                <Avatar alt="John Doe" />
                <Avatar alt="Jane Smith" size="lg" />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-black mb-3">
                With Images
              </h3>
              <div className="flex items-center gap-4">
                <Avatar
                  src="https://i.pravatar.cc/150?img=1"
                  alt="User 1"
                />
                <Avatar
                  src="https://i.pravatar.cc/150?img=2"
                  alt="User 2"
                  size="lg"
                />
                <Avatar
                  src="https://i.pravatar.cc/150?img=3"
                  alt="User 3"
                  size="xl"
                />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-black mb-3">Shapes</h3>
              <div className="flex items-center gap-4">
                <Avatar
                  src="https://i.pravatar.cc/150?img=4"
                  alt="Circle"
                  shape="circle"
                  size="lg"
                />
                <Avatar
                  src="https://i.pravatar.cc/150?img=5"
                  alt="Rounded"
                  shape="rounded"
                  size="lg"
                />
                <Avatar
                  initials="AB"
                  shape="rounded"
                  size="lg"
                />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-black mb-3">
                With Status
              </h3>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <Avatar
                    src="https://i.pravatar.cc/150?img=6"
                    alt="Online"
                    status="online"
                    size="lg"
                  />
                  <p className="text-xs text-grey-500 mt-1">Online</p>
                </div>
                <div className="text-center">
                  <Avatar
                    src="https://i.pravatar.cc/150?img=7"
                    alt="Offline"
                    status="offline"
                    size="lg"
                  />
                  <p className="text-xs text-grey-500 mt-1">Offline</p>
                </div>
                <div className="text-center">
                  <Avatar
                    src="https://i.pravatar.cc/150?img=8"
                    alt="Away"
                    status="away"
                    size="lg"
                  />
                  <p className="text-xs text-grey-500 mt-1">Away</p>
                </div>
                <div className="text-center">
                  <Avatar
                    src="https://i.pravatar.cc/150?img=9"
                    alt="Busy"
                    status="busy"
                    size="lg"
                  />
                  <p className="text-xs text-grey-500 mt-1">Busy</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-black mb-3">
                With Border
              </h3>
              <div className="flex items-center gap-4">
                <Avatar
                  src="https://i.pravatar.cc/150?img=10"
                  alt="Bordered"
                  showBorder
                  size="lg"
                />
                <Avatar
                  initials="AB"
                  showBorder
                  size="lg"
                />
                <Avatar
                  src="https://i.pravatar.cc/150?img=11"
                  alt="Bordered with status"
                  showBorder
                  status="online"
                  size="lg"
                />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-black mb-3">
                Fallback (No Image)
              </h3>
              <div className="flex items-center gap-4">
                <Avatar alt="Fallback" size="sm" />
                <Avatar alt="Fallback" size="md" />
                <Avatar alt="Fallback" size="lg" />
                <Avatar alt="Fallback" size="xl" />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-black mb-3">
                Avatar Group
              </h3>
              <div className="flex items-center -space-x-2">
                <Avatar
                  src="https://i.pravatar.cc/150?img=12"
                  alt="User 1"
                  showBorder
                />
                <Avatar
                  src="https://i.pravatar.cc/150?img=13"
                  alt="User 2"
                  showBorder
                />
                <Avatar
                  src="https://i.pravatar.cc/150?img=14"
                  alt="User 3"
                  showBorder
                />
                <Avatar
                  initials="+5"
                  showBorder
                />
              </div>
            </div>
          </div>
        </section>

        {/* Badge Component */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-black mb-4">Badge</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">Variants</h3>
              <div className="flex flex-wrap items-center gap-3">
                <Badge>Default</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="danger">Danger</Badge>
                <Badge variant="info">Info</Badge>
                <Badge variant="outline">Outline</Badge>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-black mb-3">Sizes</h3>
              <div className="flex flex-wrap items-center gap-3">
                <Badge size="sm">Small</Badge>
                <Badge size="md">Medium</Badge>
                <Badge size="lg">Large</Badge>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-black mb-3">
                With Dot Indicator
              </h3>
              <div className="flex flex-wrap items-center gap-3">
                <Badge dot>Default</Badge>
                <Badge variant="success" dot>
                  Active
                </Badge>
                <Badge variant="warning" dot>
                  Pending
                </Badge>
                <Badge variant="danger" dot>
                  Error
                </Badge>
                <Badge variant="info" dot>
                  Information
                </Badge>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-black mb-3">
                Use Cases
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-grey-500 mb-2">Status Indicators</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="success" dot size="sm">
                      Online
                    </Badge>
                    <Badge variant="warning" dot size="sm">
                      Away
                    </Badge>
                    <Badge variant="danger" dot size="sm">
                      Busy
                    </Badge>
                    <Badge variant="info" size="sm">
                      Offline
                    </Badge>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-grey-500 mb-2">Counts & Numbers</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge>12</Badge>
                    <Badge variant="danger">99+</Badge>
                    <Badge variant="success">New</Badge>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-grey-500 mb-2">Tags & Categories</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Design</Badge>
                    <Badge variant="outline">Development</Badge>
                    <Badge variant="outline">Marketing</Badge>
                    <Badge variant="info">Featured</Badge>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-grey-500 mb-2">
                    In Context (with other components)
                  </p>
                  <div className="flex items-center gap-3">
                    <Avatar
                      src="https://i.pravatar.cc/150?img=15"
                      alt="User"
                      size="lg"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-black">John Doe</span>
                        <Badge variant="success" dot size="sm">
                          Online
                        </Badge>
                      </div>
                      <p className="text-sm text-grey-500">Software Engineer</p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-grey-500 mb-2">With Buttons</p>
                  <div className="flex gap-3">
                    <Button>
                      Messages <Badge variant="danger">5</Badge>
                    </Button>
                    <Button variant="outline">
                      Notifications <Badge>12</Badge>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Spinner Component */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-black mb-4">Spinner</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">Sizes</h3>
              <div className="flex flex-wrap items-center gap-6">
                <Spinner size="sm" />
                <Spinner size="md" />
                <Spinner size="lg" />
                <Spinner size="xl" />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-black mb-3">Colors</h3>
              <div className="flex flex-wrap items-center gap-6">
                <Spinner color="primary" />
                <Spinner color="black" />
                <div className="bg-mindly-purple p-4 rounded-lg">
                  <Spinner color="white" />
                </div>
                <Spinner color="danger" />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-black mb-3">
                With Label
              </h3>
              <div className="flex flex-wrap items-start gap-6">
                <Spinner label="Loading..." />
                <Spinner label="Please wait..." size="lg" />
                <Spinner label="Processing..." color="danger" />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-black mb-3">
                Use Cases
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-grey-500 mb-2">In Buttons</p>
                  <div className="flex gap-3">
                    <Button disabled>
                      <Spinner size="sm" color="white" /> Loading...
                    </Button>
                    <Button variant="outline" disabled>
                      <Spinner size="sm" color="primary" /> Processing
                    </Button>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-grey-500 mb-2">Centered Loading</p>
                  <Card>
                    <div className="flex flex-col items-center justify-center py-12">
                      <Spinner size="xl" label="Loading data..." />
                    </div>
                  </Card>
                </div>

                <div>
                  <p className="text-sm text-grey-500 mb-2">Inline Loading</p>
                  <Card padding="sm">
                    <div className="flex items-center gap-3">
                      <Spinner size="sm" />
                      <span className="text-grey-600">
                        Fetching latest updates...
                      </span>
                    </div>
                  </Card>
                </div>

                <div>
                  <p className="text-sm text-grey-500 mb-2">Full Page Overlay</p>
                  <Card padding="sm">
                    <div className="relative h-32 bg-grey-50 rounded-lg">
                      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center">
                        <Spinner size="lg" label="Loading..." />
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tooltip Component */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-black mb-4">Tooltip</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">
                Positions
              </h3>
              <div className="flex flex-wrap items-center justify-center gap-12 p-12">
                <Tooltip content="Tooltip on top" position="top">
                  <Button>Top</Button>
                </Tooltip>
                <Tooltip content="Tooltip on bottom" position="bottom">
                  <Button>Bottom</Button>
                </Tooltip>
                <Tooltip content="Tooltip on left" position="left">
                  <Button>Left</Button>
                </Tooltip>
                <Tooltip content="Tooltip on right" position="right">
                  <Button>Right</Button>
                </Tooltip>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-black mb-3">
                Use Cases
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-grey-500 mb-2">On Buttons</p>
                  <div className="flex gap-3">
                    <Tooltip content="Save your changes">
                      <Button>Save</Button>
                    </Tooltip>
                    <Tooltip content="Delete this item permanently">
                      <Button variant="danger">Delete</Button>
                    </Tooltip>
                    <Tooltip content="This action is disabled">
                      <Button disabled>Disabled</Button>
                    </Tooltip>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-grey-500 mb-2">On Icon Buttons</p>
                  <div className="flex gap-2">
                    <Tooltip content="Edit">
                      <IconButton variant="outline">
                        <BiEdit />
                      </IconButton>
                    </Tooltip>
                    <Tooltip content="Delete">
                      <IconButton variant="danger">
                        <BiTrash />
                      </IconButton>
                    </Tooltip>
                    <Tooltip content="Share">
                      <IconButton variant="text">
                        <BiShare />
                      </IconButton>
                    </Tooltip>
                    <Tooltip content="Search">
                      <IconButton>
                        <BiSearch />
                      </IconButton>
                    </Tooltip>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-grey-500 mb-2">On Text</p>
                  <p className="text-black">
                    Hover over{" "}
                    <Tooltip content="This is additional information">
                      <span className="text-mindly-purple cursor-help border-b border-dashed border-mindly-purple">
                        this text
                      </span>
                    </Tooltip>{" "}
                    to see a tooltip.
                  </p>
                </div>

                <div>
                  <p className="text-sm text-grey-500 mb-2">On Badges</p>
                  <div className="flex gap-2">
                    <Tooltip content="Active users currently online">
                      <Badge variant="success" dot>
                        24 Active
                      </Badge>
                    </Tooltip>
                    <Tooltip content="Issues requiring attention">
                      <Badge variant="danger">5 Errors</Badge>
                    </Tooltip>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-grey-500 mb-2">On Avatars</p>
                  <div className="flex -space-x-2">
                    <Tooltip content="John Doe">
                      <Avatar
                        src="https://i.pravatar.cc/150?img=16"
                        alt="John Doe"
                        showBorder
                      />
                    </Tooltip>
                    <Tooltip content="Jane Smith">
                      <Avatar
                        src="https://i.pravatar.cc/150?img=17"
                        alt="Jane Smith"
                        showBorder
                      />
                    </Tooltip>
                    <Tooltip content="Mike Johnson">
                      <Avatar
                        src="https://i.pravatar.cc/150?img=18"
                        alt="Mike Johnson"
                        showBorder
                      />
                    </Tooltip>
                    <Tooltip content="5 more team members">
                      <Avatar initials="+5" showBorder />
                    </Tooltip>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-grey-500 mb-2">
                    Complex Tooltip Content
                  </p>
                  <Tooltip
                    content={
                      <div className="space-y-1">
                        <p className="font-semibold">John Doe</p>
                        <p className="text-xs opacity-90">
                          Software Engineer
                        </p>
                        <p className="text-xs opacity-90">john@example.com</p>
                      </div>
                    }
                  >
                    <Avatar
                      src="https://i.pravatar.cc/150?img=19"
                      alt="John Doe"
                      size="lg"
                    />
                  </Tooltip>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Color Palette */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-black mb-4">Color Palette</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <div className="w-full h-20 rounded-lg bg-mindly-purple"></div>
              <p className="text-sm font-medium text-black">Mindly Purple</p>
              <p className="text-xs text-grey-400">#6b5eff</p>
            </div>
            <div className="space-y-2">
              <div className="w-full h-20 rounded-lg bg-cloud-white border border-soft-periwinkle"></div>
              <p className="text-sm font-medium text-black">Cloud White</p>
              <p className="text-xs text-grey-400">#f4f6fa</p>
            </div>
            <div className="space-y-2">
              <div className="w-full h-20 rounded-lg bg-soft-periwinkle"></div>
              <p className="text-sm font-medium text-black">Soft Periwinkle</p>
              <p className="text-xs text-grey-400">#d6dae8</p>
            </div>
            <div className="space-y-2">
              <div className="w-full h-20 rounded-lg bg-red-500"></div>
              <p className="text-sm font-medium text-black">Danger Red</p>
              <p className="text-xs text-grey-400">red-500</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
