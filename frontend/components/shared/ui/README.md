# Mindly UI System

A comprehensive React component library built with TypeScript and Tailwind CSS, designed with a calm, therapeutic aesthetic for the Mindly mental wellness platform.

## Technology Stack

- **React 19** with TypeScript
- **Tailwind CSS 4** for styling
- **react-icons** for iconography
- CSS custom properties for theming

## Installation

Components are located in `frontend/components/shared/ui/`. Import them directly:

```tsx
import { Button, Card, Input } from '@/components/shared/ui';
```

## Components

### Form Components

#### Button

Flexible button component with multiple variants and sizes.

```tsx
import { Button } from '@/components/shared/ui/Button';

<Button variant="default" size="md">Click me</Button>
<Button variant="outline">Outlined</Button>
<Button variant="text">Text only</Button>
<Button variant="danger">Delete</Button>
<Button disabled>Disabled</Button>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | `'default' \| 'outline' \| 'text' \| 'danger'` | `'default'` | Visual style |
| size | `'sm' \| 'md' \| 'lg'` | `'md'` | Button size |
| disabled | `boolean` | `false` | Disabled state |

#### IconButton

Icon-only button for compact actions.

```tsx
import { IconButton } from '@/components/shared/ui/IconButton';
import { BiEdit, BiTrash } from 'react-icons/bi';

<IconButton icon={BiEdit} variant="default" />
<IconButton icon={BiTrash} variant="danger" shape="circle" />
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| icon | `IconType` | required | React icon component |
| variant | `'default' \| 'outline' \| 'text' \| 'danger'` | `'default'` | Visual style |
| size | `'sm' \| 'md' \| 'lg'` | `'md'` | Button size |
| shape | `'circle' \| 'rounded'` | `'rounded'` | Button shape |

#### Input

Text input field with label and error state support.

```tsx
import { Input } from '@/components/shared/ui/Input';

<Input label="Email" placeholder="Enter your email" />
<Input label="Password" type="password" error="Required field" />
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| label | `string` | - | Input label |
| error | `string` | - | Error message |
| size | `'sm' \| 'md' \| 'lg'` | `'md'` | Input size |

#### Textarea

Multi-line text input.

```tsx
import { Textarea } from '@/components/shared/ui/Textarea';

<Textarea label="Notes" placeholder="Add your notes..." />
<Textarea label="Description" error="Too short" />
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| label | `string` | - | Textarea label |
| error | `string` | - | Error message |
| size | `'sm' \| 'md' \| 'lg'` | `'md'` | Textarea size |

#### Select

Dropdown selector component.

```tsx
import { Select } from '@/components/shared/ui/Select';

<Select label="Country">
  <option value="us">United States</option>
  <option value="uk">United Kingdom</option>
</Select>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| label | `string` | - | Select label |
| error | `string` | - | Error message |
| size | `'sm' \| 'md' \| 'lg'` | `'md'` | Select size |

#### SearchInput

Specialized search field with icon.

```tsx
import { SearchInput } from '@/components/shared/ui/SearchInput';

<SearchInput placeholder="Search..." />
<SearchInput iconPosition="right" />
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| iconPosition | `'left' \| 'right'` | `'left'` | Search icon position |
| size | `'sm' \| 'md' \| 'lg'` | `'md'` | Input size |

#### Checkbox

Boolean input with label support.

```tsx
import { Checkbox } from '@/components/shared/ui/Checkbox';

<Checkbox label="I agree to the terms" />
<Checkbox label="Subscribe" checked />
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| label | `string` | - | Checkbox label |
| error | `string` | - | Error message |
| size | `'sm' \| 'md' \| 'lg'` | `'md'` | Checkbox size |

#### Radio

Single selection from a group.

```tsx
import { Radio } from '@/components/shared/ui/Radio';

<Radio name="plan" label="Monthly" value="monthly" />
<Radio name="plan" label="Yearly" value="yearly" />
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| label | `string` | - | Radio label |
| name | `string` | required | Group name |
| error | `string` | - | Error message |
| size | `'sm' \| 'md' \| 'lg'` | `'md'` | Radio size |

#### Toggle

Switch component for on/off states.

```tsx
import { Toggle } from '@/components/shared/ui/Toggle';

<Toggle label="Enable notifications" />
<Toggle label="Dark mode" checked />
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| label | `string` | - | Toggle label |
| error | `string` | - | Error message |
| size | `'sm' \| 'md' \| 'lg'` | `'md'` | Toggle size |

### Display Components

#### Card

Container component with optional header and footer.

```tsx
import { Card } from '@/components/shared/ui/Card';

<Card title="Session Summary" subtitle="Today's progress">
  <p>Content goes here</p>
</Card>

<Card variant="elevated" padding="lg" footer={<Button>Save</Button>}>
  <p>Elevated card with footer</p>
</Card>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | `'default' \| 'outlined' \| 'elevated'` | `'default'` | Card style |
| padding | `'none' \| 'sm' \| 'md' \| 'lg'` | `'md'` | Internal padding |
| title | `string` | - | Card title |
| subtitle | `string` | - | Card subtitle |
| footer | `ReactNode` | - | Footer content |
| hoverEffect | `boolean` | `false` | Enable hover animation |

#### Badge

Status or tag indicator.

```tsx
import { Badge } from '@/components/shared/ui/Badge';

<Badge>Default</Badge>
<Badge variant="success">Active</Badge>
<Badge variant="warning" dot>Pending</Badge>
<Badge variant="danger">Error</Badge>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | `'default' \| 'success' \| 'warning' \| 'danger' \| 'info' \| 'outline'` | `'default'` | Badge style |
| size | `'sm' \| 'md' \| 'lg'` | `'md'` | Badge size |
| dot | `boolean` | `false` | Show dot indicator |

#### Avatar

User profile picture with fallback support.

```tsx
import { Avatar } from '@/components/shared/ui/Avatar';

<Avatar src="/user.jpg" alt="John Doe" />
<Avatar initials="JD" size="lg" />
<Avatar src="/user.jpg" status="online" />
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| src | `string` | - | Image URL |
| alt | `string` | - | Alt text |
| initials | `string` | - | Fallback initials |
| size | `'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Avatar size |
| shape | `'circle' \| 'rounded'` | `'circle'` | Avatar shape |
| status | `'online' \| 'offline' \| 'away' \| 'busy'` | - | Status indicator |

#### Spinner

Loading indicator.

```tsx
import { Spinner } from '@/components/shared/ui/Spinner';

<Spinner />
<Spinner size="lg" color="primary" />
<Spinner label="Loading..." />
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| size | `'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Spinner size |
| color | `'primary' \| 'white' \| 'black' \| 'danger'` | `'primary'` | Spinner color |
| label | `string` | - | Loading text |

#### Modal

Dialog/popup component with keyboard support.

```tsx
import { Modal } from '@/components/shared/ui/Modal';

<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Confirm Action"
  footer={
    <>
      <Button variant="outline" onClick={onClose}>Cancel</Button>
      <Button onClick={onConfirm}>Confirm</Button>
    </>
  }
>
  <p>Are you sure you want to proceed?</p>
</Modal>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| isOpen | `boolean` | required | Modal visibility |
| onClose | `() => void` | required | Close handler |
| title | `string` | - | Modal title |
| footer | `ReactNode` | - | Footer content |
| size | `'sm' \| 'md' \| 'lg'` | `'md'` | Modal width |
| closeOnOverlayClick | `boolean` | `true` | Close on backdrop click |
| closeOnEscape | `boolean` | `true` | Close on Escape key |

#### Tooltip

Informational popover on hover.

```tsx
import { Tooltip } from '@/components/shared/ui/Tooltip';

<Tooltip content="Edit this item">
  <IconButton icon={BiEdit} />
</Tooltip>

<Tooltip content="More info" position="bottom" delay={500}>
  <span>Hover me</span>
</Tooltip>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| content | `ReactNode` | required | Tooltip content |
| position | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'` | Tooltip position |
| delay | `number` | `200` | Show delay (ms) |

## Color Palette

### Brand Colors

| Name | Value | Usage |
|------|-------|-------|
| Mindly Purple | `#6b5eff` | Primary actions, focus states |
| Cloud White | `#f4f6fa` | Light backgrounds |
| Soft Periwinkle | `#d6dae8` | Borders, secondary elements |
| Lemon | `#c3ff49` | Accent highlights |

### Status Colors

| Name | Value | Usage |
|------|-------|-------|
| Success | `#10b981` | Success states, online status |
| Warning | `#fbbf24` | Warning states, away status |
| Danger | `#ef4444` | Error states, destructive actions |

### Grey Scale

10 shades from `grey-1000` (#0a0a0a) to `grey-0` (#ffffff) for typography and backgrounds.

## Design Patterns

### Consistent Sizing

All components follow a unified sizing system:
- `sm` - Compact, dense layouts
- `md` - Default, standard usage
- `lg` - Prominent, spacious layouts

### Ref Forwarding

All components support `ref` forwarding for DOM access:

```tsx
const inputRef = useRef<HTMLInputElement>(null);
<Input ref={inputRef} label="Name" />
```

### Focus States

Interactive elements use consistent focus styling:
```css
focus:ring-2 focus:ring-mindly-purple focus:outline-none
```

### Disabled States

All form components support disabled state:
```css
disabled:opacity-50 disabled:cursor-not-allowed
```

## Accessibility

- ARIA attributes on interactive elements
- Keyboard navigation support (Escape for modals)
- Focus management and visible focus indicators
- Semantic HTML elements
- Error messages linked to form inputs

## UI Preview

A live component showcase is available at `/ui-preview` in development mode. This page demonstrates all components with their variants and states.

## File Structure

```
components/shared/ui/
├── Avatar.tsx
├── Badge.tsx
├── Button.tsx
├── Card.tsx
├── Checkbox.tsx
├── IconButton.tsx
├── Input.tsx
├── Modal.tsx
├── Radio.tsx
├── SearchInput.tsx
├── Select.tsx
├── Spinner.tsx
├── Textarea.tsx
├── Toggle.tsx
├── Tooltip.tsx
└── README.md
```
